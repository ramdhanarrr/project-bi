import { createHmac } from "crypto";
import { NextResponse } from "next/server";
import {
  metabaseDashboardEmbeds,
  type MetabaseDashboardConfig,
} from "@/components/dashboard/dashboardData";

type MetabaseJwtPayload = {
  resource: {
    dashboard: number;
  };
  params: Record<string, string | number | boolean | null>;
  iat: number;
  exp: number;
  _embedding_params?: Record<string, "disabled" | "enabled">;
};

const tokenLifetimeSeconds = 10 * 60;

function base64UrlEncode(value: string) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function getMetabaseSecret(
  category: string,
  scenario: string,
  config: MetabaseDashboardConfig
) {
  const categoryKey = category.replace(/-/g, "_").toUpperCase();
  const scenarioEnvKey = `METABASE_EMBED_SECRET_${categoryKey}_${scenario}`;
  const categoryEnvKey = `METABASE_EMBED_SECRET_${categoryKey}`;

  if (config.secretEnvKey) {
    return process.env[config.secretEnvKey];
  }

  return (
    process.env[scenarioEnvKey] ??
    process.env[categoryEnvKey] ??
    process.env.METABASE_EMBED_SECRET
  );
}

function getMetabaseSecretLabel(category: string, scenario: string) {
  return `METABASE_EMBED_SECRET_${category
    .replace(/-/g, "_")
    .toUpperCase()}_${scenario}`;
}

function signJwt(payload: MetabaseJwtPayload, secret: string) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;
  const signature = createHmac("sha256", secret)
    .update(unsignedToken)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${unsignedToken}.${signature}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const scenario = searchParams.get("scenario");

  if (!category || !scenario) {
    return NextResponse.json(
      { error: "category dan scenario wajib diisi" },
      { status: 400 }
    );
  }

  const config = metabaseDashboardEmbeds[category]?.[scenario];

  if (!config?.dashboardId) {
    return NextResponse.json(
      { error: "Dashboard Metabase belum dikonfigurasi" },
      { status: 404 }
    );
  }

  const secret = getMetabaseSecret(category, scenario, config);

  if (!secret) {
    return NextResponse.json(
      {
        error: `Secret embed Metabase belum dikonfigurasi. Isi ${getMetabaseSecretLabel(
          category,
          scenario
        )}, secret kategori, atau METABASE_EMBED_SECRET.`,
      },
      { status: 500 }
    );
  }

  const now = Math.floor(Date.now() / 1000);
  const payload: MetabaseJwtPayload = {
    resource: {
      dashboard: config.dashboardId,
    },
    params: config.params ?? {},
    iat: now,
    exp: now + tokenLifetimeSeconds,
  };

  if (config.embeddingParams) {
    payload._embedding_params = config.embeddingParams;
  }

  return NextResponse.json({
    expiresAt: payload.exp,
    token: signJwt(payload, secret),
  });
}

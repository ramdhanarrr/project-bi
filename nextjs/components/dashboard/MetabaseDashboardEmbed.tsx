"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { type MetabaseDashboardConfig } from "@/components/dashboard/dashboardData";

type MetabaseBrowserConfig = {
  isGuest: boolean;
  instanceUrl: string;
  theme: {
    preset: "light";
  };
};

declare global {
  interface Window {
    defineMetabaseConfig?: (config: MetabaseBrowserConfig) => void;
    metabaseConfig?: MetabaseBrowserConfig;
  }
}

type MetabaseDashboardEmbedProps = {
  category: string;
  config?: MetabaseDashboardConfig;
  instanceUrl?: string;
  label: string;
  scenario: string;
};

export default function MetabaseDashboardEmbed({
  category,
  config,
  instanceUrl,
  label,
  scenario,
}: MetabaseDashboardEmbedProps) {
  const [error, setError] = useState<string>();
  const [token, setToken] = useState<string>();
  const minHeight = config?.minHeight ?? 720;

  useEffect(() => {
    if (!instanceUrl || !config?.dashboardId) {
      return;
    }

    let isActive = true;
    let refreshTimer: ReturnType<typeof window.setTimeout> | undefined;

    async function loadToken() {
      setError(undefined);

      try {
        const params = new URLSearchParams({
          category,
          scenario,
        });
        const response = await fetch(`/api/metabase-token?${params}`);
        const data = (await response.json()) as {
          error?: string;
          expiresAt?: number;
          token?: string;
        };

        if (!response.ok || !data.token || !data.expiresAt) {
          throw new Error(data.error ?? "Token Metabase gagal dibuat");
        }

        if (!isActive) {
          return;
        }

        setToken(data.token);

        const now = Math.floor(Date.now() / 1000);
        const refreshInSeconds = Math.max(data.expiresAt - now - 60, 30);
        refreshTimer = window.setTimeout(loadToken, refreshInSeconds * 1000);
      } catch (caughtError) {
        if (!isActive) {
          return;
        }

        setToken(undefined);
        setError(
          caughtError instanceof Error
            ? caughtError.message
            : "Token Metabase gagal dibuat"
        );
      }
    }

    loadToken();

    return () => {
      isActive = false;

      if (refreshTimer) {
        window.clearTimeout(refreshTimer);
      }
    };
  }, [category, config?.dashboardId, instanceUrl, scenario]);

  useEffect(() => {
    if (!instanceUrl) {
      return;
    }

    window.defineMetabaseConfig = function defineMetabaseConfig(config) {
      window.metabaseConfig = config;
    };

    window.defineMetabaseConfig({
      theme: {
        preset: "light",
      },
      isGuest: true,
      instanceUrl,
    });
  }, [instanceUrl]);

  if (!instanceUrl || !config?.dashboardId) {
    return (
      <div className="grid h-full min-h-[720px] place-items-center bg-white px-6 text-center">
        <div className="max-w-md rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-10">
          <h2 className="text-lg font-semibold text-slate-800">
            Embed Metabase belum dikonfigurasi
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Tambahkan host dan dashboard ID untuk {label} di{" "}
            <span className="font-mono text-slate-700">
              metabaseInstanceUrls
            </span>
            {" dan "}
            <span className="font-mono text-slate-700">
              metabaseDashboardEmbeds
            </span>
            .
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid h-full min-h-[720px] place-items-center bg-white px-6 text-center">
        <div className="max-w-md rounded-lg border border-rose-200 bg-rose-50 px-6 py-10">
          <h2 className="text-lg font-semibold text-rose-900">
            Token Metabase gagal dibuat
          </h2>
          <p className="mt-2 text-sm leading-6 text-rose-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="grid h-full min-h-[720px] place-items-center bg-white px-6 text-center">
        <div className="text-sm font-semibold text-slate-500">
          Memuat embed Metabase...
        </div>
      </div>
    );
  }

  const withTitle = config.withTitle ?? true;
  const withDownloads = config.withDownloads ?? true;

  return (
    <>
      <Script src={`${instanceUrl}/app/embed.js`} strategy="afterInteractive" />
      <div
        key={token}
        className="h-full w-full"
        dangerouslySetInnerHTML={{
          __html: `<metabase-dashboard token="${token}" with-title="${withTitle}" with-downloads="${withDownloads}" style="display:block;width:100%;height:100%;min-height:${minHeight}px;"></metabase-dashboard>`,
        }}
      />
    </>
  );
}

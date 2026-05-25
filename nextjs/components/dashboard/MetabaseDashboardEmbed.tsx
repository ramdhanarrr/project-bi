"use client";

import Script from "next/script";
import { type MetabaseDashboardConfig } from "@/components/dashboard/dashboardData";

type MetabaseDashboardEmbedProps = {
  config?: MetabaseDashboardConfig;
  instanceUrl?: string;
  label: string;
};

export default function MetabaseDashboardEmbed({
  config,
  instanceUrl,
  label,
}: MetabaseDashboardEmbedProps) {
  const minHeight = config?.minHeight ?? 720;

  if (!instanceUrl || !config?.token) {
    return (
      <div className="grid h-full min-h-[720px] place-items-center bg-white px-6 text-center">
        <div className="max-w-md rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-10">
          <h2 className="text-lg font-semibold text-slate-800">
            Embed Metabase belum dikonfigurasi
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Tambahkan host dan token embed untuk {label} di{" "}
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

  const withTitle = config.withTitle ?? true;
  const withDownloads = config.withDownloads ?? true;

  return (
    <>
      <Script
        id={`metabase-embed-config-${instanceUrl}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.defineMetabaseConfig = function defineMetabaseConfig(config) {
              window.metabaseConfig = config;
            };

            window.defineMetabaseConfig({
              theme: {
                preset: "light"
              },
              isGuest: true,
              instanceUrl: "${instanceUrl}"
            });
          `,
        }}
      />
      <Script src={`${instanceUrl}/app/embed.js`} strategy="afterInteractive" />
      <div
        className="h-full w-full"
        dangerouslySetInnerHTML={{
          __html: `<metabase-dashboard token="${config.token}" with-title="${withTitle}" with-downloads="${withDownloads}" style="display:block;width:100%;height:100%;min-height:${minHeight}px;"></metabase-dashboard>`,
        }}
      />
    </>
  );
}

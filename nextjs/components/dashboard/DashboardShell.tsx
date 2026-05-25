"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import HomeHeader from "@/components/home/HomeHeader";
import MetabaseDashboardEmbed from "@/components/dashboard/MetabaseDashboardEmbed";
import {
  metabaseDashboardEmbeds,
  metabaseInstanceUrls,
  olapDashboardEmbeds,
  scenarios,
  type DashboardCategory,
  type DashboardScenario,
  type OlapDashboardConfig,
} from "@/components/dashboard/dashboardData";

type DashboardShellProps = {
  activeCategory: DashboardCategory;
  activeScenario: string;
  activeOlapId?: string;
};

function SidebarToggleIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
      <path d={collapsed ? "M15 8l4 4-4 4" : "M9 8l-4 4 4 4"} />
    </svg>
  );
}

function DashboardSidebar({
  activeSlug,
  activeScenario,
  isCollapsed,
  onToggle,
}: {
  activeSlug: string;
  activeScenario: string;
  isCollapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <aside className="border-b border-slate-200 bg-white px-4 py-4 shadow-[1px_0_0_rgba(15,23,42,0.05)] transition-[width] duration-200 lg:sticky lg:top-[76px] lg:min-h-[calc(100vh-76px)] lg:border-b-0 lg:py-5">
      <div
        className={`mb-4 hidden items-center lg:flex ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        <div className={isCollapsed ? "hidden" : "min-w-0"}>
          <div className="text-sm font-semibold text-slate-800">Navigasi</div>
          <div className="text-xs text-slate-400">Dashboard SADAYA</div>
        </div>

        <button
          type="button"
          onClick={onToggle}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#0b9887]/40 hover:bg-[#0b9887]/8 hover:text-[#0b9887]"
          aria-label={isCollapsed ? "Buka sidebar" : "Tutup sidebar"}
        >
          <SidebarToggleIcon collapsed={isCollapsed} />
        </button>
      </div>

      <div
        className={`mb-3 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 ${
          isCollapsed ? "lg:hidden" : ""
        }`}
      >
        Skenario
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {scenarios.map((scenario) => {
          const isActive = scenario.id === activeScenario;

          return (
            <Link
              key={scenario.id}
              href={`/dashboard/${activeSlug}?skenario=${scenario.id}`}
              className={`flex min-h-11 shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold transition ${
                isCollapsed ? "lg:justify-center lg:px-2" : ""
              } ${
                isActive
                  ? "bg-[#e0f4f1] text-[#075f56]"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${
                  isActive
                    ? "bg-[#0b9887] text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {scenario.id}
              </span>
              <span className={`truncate ${isCollapsed ? "lg:hidden" : ""}`}>
                {scenario.label}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

function DashboardHeader({
  activeCategory,
  scenario,
}: {
  activeCategory: DashboardCategory;
  scenario: DashboardScenario;
}) {
  const title =
    scenario.type === "olap"
      ? `Analisis OLAP ${activeCategory.label}`
      : `${activeCategory.title} ${scenario.label}`;

  return (
    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#078b78]">
          {activeCategory.label}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
          {title}
        </h1>
      </div>
    </div>
  );
}

function EmptyEmbedState({ label }: { label: string }) {
  return (
    <div className="grid h-full min-h-[720px] place-items-center bg-white px-6 text-center">
      <div className="max-w-md rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-10">
        <h2 className="text-lg font-semibold text-slate-800">
          Embed OLAP belum dikonfigurasi
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Tambahkan URL embed untuk {label} di{" "}
          <span className="font-mono text-slate-700">
            olapDashboardEmbeds
          </span>
          .
        </p>
      </div>
    </div>
  );
}

function OlapMenuCard({
  activeCategory,
  item,
}: {
  activeCategory: DashboardCategory;
  item: OlapDashboardConfig;
}) {
  return (
    <Link
      href={`/dashboard/${activeCategory.slug}?skenario=4&olap=${item.id}`}
      className="group min-h-[220px] rounded-lg border border-slate-200 bg-white p-6 shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-[#0b9887]/40 hover:shadow-[0_16px_34px_rgba(15,23,42,0.12)]"
    >
      <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#e0f4f1] text-xl font-bold text-[#0b9887]">
        {item.initial}
      </span>
      <h2 className="mt-6 text-xl font-semibold text-slate-900">
        {item.label}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        {item.description}
      </p>
    </Link>
  );
}

function OlapMenu({ activeCategory }: { activeCategory: DashboardCategory }) {
  const olapItems = olapDashboardEmbeds[activeCategory.slug] ?? [];

  return (
    <div className="mx-auto max-w-[1480px] px-4 py-6 sm:px-6 lg:px-8">
      <DashboardHeader
        activeCategory={activeCategory}
        scenario={scenarios.find((scenario) => scenario.type === "olap")!}
      />
      <div className="min-h-[560px] rounded-lg bg-white px-5 py-8 shadow-[0_12px_32px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 sm:px-8">
        <p className="text-sm text-slate-500">
          Pilih skema OLAP untuk eksplorasi data multidimensi
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {olapItems.map((item) => (
            <OlapMenuCard
              key={item.id}
              activeCategory={activeCategory}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function OlapDashboard({
  activeCategory,
  activeOlapId,
}: {
  activeCategory: DashboardCategory;
  activeOlapId?: string;
}) {
  const activeOlap = olapDashboardEmbeds[activeCategory.slug]?.find(
    (item) => item.id === activeOlapId
  );

  if (!activeOlap) {
    return <OlapMenu activeCategory={activeCategory} />;
  }

  return (
    <div className="h-[calc(100vh-76px)] min-h-[720px] w-full overflow-hidden bg-white">
      {activeOlap.url ? (
        <iframe
          src={activeOlap.url}
          title={`Analisis OLAP ${activeCategory.label} - ${activeOlap.label}`}
          className="h-full min-h-[720px] w-full border-0 bg-white"
        />
      ) : (
        <EmptyEmbedState label={`${activeCategory.label} ${activeOlap.label}`} />
      )}
    </div>
  );
}

function MetabaseDashboard({
  activeCategory,
  activeScenario,
  scenario,
}: {
  activeCategory: DashboardCategory;
  activeScenario: string;
  scenario: DashboardScenario;
}) {
  const config = metabaseDashboardEmbeds[activeCategory.slug]?.[activeScenario];
  const instanceUrl = metabaseInstanceUrls[activeCategory.slug];

  return (
    <div className="h-[calc(100vh-76px)] min-h-[720px] w-full overflow-hidden bg-white">
      <MetabaseDashboardEmbed
        config={config}
        instanceUrl={instanceUrl}
        label={`${activeCategory.label} ${scenario.label}`}
      />
    </div>
  );
}

export default function DashboardShell({
  activeCategory,
  activeScenario,
  activeOlapId,
}: DashboardShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const scenario = useMemo(
    () =>
      scenarios.find((scenarioItem) => scenarioItem.id === activeScenario) ??
      scenarios[0],
    [activeScenario]
  );

  const isMetabaseDashboard = scenario.type === "metabase";
  const isFullEmbed = isMetabaseDashboard || Boolean(activeOlapId);

  return (
    <main className="min-h-screen bg-[#f5f8fb] text-slate-900">
      <HomeHeader />

      <div
        className={`lg:grid ${
          isSidebarCollapsed
            ? "lg:grid-cols-[76px_1fr]"
            : "lg:grid-cols-[240px_1fr]"
        }`}
      >
        <DashboardSidebar
          activeSlug={activeCategory.slug}
          activeScenario={activeScenario}
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed((value) => !value)}
        />

        <section
          className={isFullEmbed ? "min-w-0 bg-white" : "min-w-0"}
        >
          {isMetabaseDashboard ? (
            <MetabaseDashboard
              activeCategory={activeCategory}
              activeScenario={activeScenario}
              scenario={scenario}
            />
          ) : (
            <OlapDashboard
              activeCategory={activeCategory}
              activeOlapId={activeOlapId}
            />
          )}
        </section>
      </div>
    </main>
  );
}

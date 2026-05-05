"use client";

import { useState } from "react";
import Link from "next/link";
import HomeHeader from "@/components/home/HomeHeader";
import {
  scenarios,
  type DashboardCategory,
} from "@/components/dashboard/dashboardData";

const metricCards = ["count xx", "sum xx", "avg", "count xx"];

type DashboardShellProps = {
  activeCategory: DashboardCategory;
  activeScenario: string;
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

export default function DashboardShell({
  activeCategory,
  activeScenario,
}: DashboardShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const activeSlug = activeCategory.slug;

  return (
    <main className="min-h-screen bg-[#f5f8fb] text-slate-900">
      <HomeHeader />

      <div
        className={`lg:grid ${
          isSidebarCollapsed ? "lg:grid-cols-[76px_1fr]" : "lg:grid-cols-[240px_1fr]"
        }`}
      >
        <aside className="border-b border-slate-200 bg-white px-4 py-4 shadow-[1px_0_0_rgba(15,23,42,0.05)] transition-[width] duration-200 lg:sticky lg:top-[76px] lg:min-h-[calc(100vh-76px)] lg:border-b-0 lg:py-5">
          <div
            className={`mb-4 hidden items-center lg:flex ${
              isSidebarCollapsed ? "justify-center" : "justify-between"
            }`}
          >
            <div className={isSidebarCollapsed ? "hidden" : "min-w-0"}>
              <div className="text-sm font-semibold text-slate-800">Navigasi</div>
              <div className="text-xs text-slate-400">Dashboard SADAYA</div>
            </div>
            <button
              type="button"
              onClick={() => setIsSidebarCollapsed((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#0b9887]/40 hover:bg-[#0b9887]/8 hover:text-[#0b9887]"
              aria-label={isSidebarCollapsed ? "Buka sidebar" : "Tutup sidebar"}
              title={isSidebarCollapsed ? "Buka sidebar" : "Tutup sidebar"}
            >
              <SidebarToggleIcon collapsed={isSidebarCollapsed} />
            </button>
          </div>

          <div
            className={`mb-3 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 ${
              isSidebarCollapsed ? "lg:hidden" : ""
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
                    isSidebarCollapsed ? "lg:justify-center lg:px-2" : ""
                  } ${
                    isActive
                      ? "bg-[#e0f4f1] text-[#075f56]"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                  title={scenario.label}
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
                  <span className={`truncate ${isSidebarCollapsed ? "lg:hidden" : ""}`}>
                    {scenario.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </aside>

        <section className="min-w-0 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1480px]">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#078b78]">
                  {activeCategory.label}
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
                  {activeCategory.title} Skenario {activeScenario}
                </h1>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metricCards.map((label, index) => (
                <div
                  key={`${label}-${index}`}
                  className="rounded-xl bg-white px-5 py-5 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80"
                >
                  <div className="text-sm font-semibold text-slate-500">{label}</div>
                  <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
                    0,00
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_1fr]">
              <div className="rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80 sm:p-5">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm font-semibold text-slate-800">
                    Perbandingan xxx
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0b9887]" />
                      Current Year
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                      Past Year
                    </span>
                  </div>
                </div>
                <div className="flex h-[300px] items-end gap-2 rounded-lg border border-slate-100 bg-[linear-gradient(#eef3f6_1px,transparent_1px)] bg-[length:100%_56px] px-3 pb-5 sm:h-[390px] sm:gap-4 sm:px-5">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-1 items-end justify-center gap-1"
                    >
                      <span
                        className="w-2 rounded-t bg-[#0b9887]/75 sm:w-3"
                        style={{ height: `${38 + ((index * 17) % 42)}%` }}
                      />
                      <span
                        className="w-2 rounded-t bg-slate-300 sm:w-3"
                        style={{ height: `${34 + ((index * 13) % 38)}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80 sm:p-5">
                  <div className="mb-4 text-sm font-semibold text-slate-800">
                    Tren xxx
                  </div>
                  <div className="h-[185px] rounded-lg border border-slate-100 bg-[linear-gradient(#eef3f6_1px,transparent_1px)] bg-[length:100%_44px] p-3">
                    <svg
                      viewBox="0 0 520 150"
                      className="h-full w-full text-slate-400"
                      aria-hidden="true"
                    >
                      <polyline
                        fill="none"
                        stroke="#8aa0bc"
                        strokeWidth="4"
                        points="10,98 55,80 100,72 145,78 190,68 235,76 280,60 325,56 370,58 415,66 460,70 510,42"
                      />
                      {Array.from({ length: 12 }).map((_, index) => (
                        <circle
                          key={index}
                          cx={10 + index * 45}
                          cy={[98, 80, 72, 78, 68, 76, 60, 56, 58, 66, 70, 42][index]}
                          r="4"
                          fill="white"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      ))}
                    </svg>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80 sm:p-5">
                  <div className="mb-3 text-sm font-semibold text-slate-800">
                    Tabel xxx
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <div className="min-w-[520px]">
                      {Array.from({ length: 7 }).map((_, rowIndex) => (
                        <div
                          key={rowIndex}
                          className="grid grid-cols-4 border-b border-slate-200 last:border-b-0"
                        >
                          {Array.from({ length: 4 }).map((__, cellIndex) => (
                            <div
                              key={cellIndex}
                              className={`px-3 py-2 text-xs ${
                                rowIndex === 0
                                  ? "bg-[#e8f4f2] font-semibold text-slate-700"
                                  : "text-slate-500"
                              }`}
                            >
                              {rowIndex === 0 ? "Header" : "Data"}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

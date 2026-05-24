"use client";

import { useState } from "react";
import Link from "next/link";
import HomeHeader from "@/components/home/HomeHeader";
import {
  scenarios,
  type DashboardCategory,
} from "@/components/dashboard/dashboardData";

type DashboardShellProps = {
  activeCategory: DashboardCategory;
  activeScenario: string;
};

const metricCards = [
  {
    label: "Total Data",
    value: "12.540",
  },
  {
    label: "Jumlah Aktif",
    value: "8.210",
  },
  {
    label: "Rata-rata",
    value: "76%",
  },
  {
    label: "Pertumbuhan",
    value: "+12%",
  },
];

const olapUrls: Record<string, string> = {
  penelitian: "http://localhost:8081/mondrian/index.jsp",

  publikasi: "http://localhost:8081/mondrian/index.jsp",

  hki: "http://localhost:8081/mondrian/index.jsp",
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
  const activeOlapUrl = olapUrls[activeSlug];

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
        {/* SIDEBAR */}
        <aside className="border-b border-slate-200 bg-white px-4 py-4 shadow-[1px_0_0_rgba(15,23,42,0.05)] transition-[width] duration-200 lg:sticky lg:top-[76px] lg:min-h-[calc(100vh-76px)] lg:border-b-0 lg:py-5">
          <div
            className={`mb-4 hidden items-center lg:flex ${
              isSidebarCollapsed ? "justify-center" : "justify-between"
            }`}
          >
            <div className={isSidebarCollapsed ? "hidden" : "min-w-0"}>
              <div className="text-sm font-semibold text-slate-800">
                Navigasi
              </div>

              <div className="text-xs text-slate-400">
                Dashboard SADAYA
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSidebarCollapsed((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#0b9887]/40 hover:bg-[#0b9887]/8 hover:text-[#0b9887]"
              aria-label={
                isSidebarCollapsed ? "Buka sidebar" : "Tutup sidebar"
              }
            >
              <SidebarToggleIcon collapsed={isSidebarCollapsed} />
            </button>
          </div>

          {/* SCENARIO */}
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

                  <span
                    className={`truncate ${
                      isSidebarCollapsed ? "lg:hidden" : ""
                    }`}
                  >
                    {scenario.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="min-w-0 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1480px]">
            {/* HEADER */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#078b78]">
                  {activeCategory.label}
                </p>

                <h1 className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
                  {activeScenario === "4"
                    ? `Analisis OLAP ${activeCategory.label}`
                    : `${activeCategory.title} Skenario ${activeScenario}`}
                </h1>
              </div>
            </div>

            {/* KPI */}
            {activeScenario !== "4" && (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metricCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80"
                  >
                    <div className="text-sm font-medium text-slate-500">
                      {card.label}
                    </div>

                    <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
                      {card.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CONTENT */}
            {activeScenario === "4" ? (
              /* OLAP */
              <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
                {activeOlapUrl ? (
                  <iframe
                    src={activeOlapUrl}
                    title={`Analisis OLAP ${activeCategory.label}`}
                    className="h-[calc(100vh-160px)] min-h-[720px] w-full border-0 bg-white"
                  />
                ) : (
                  <div className="m-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-20 text-center text-slate-500">
                    OLAP belum tersedia untuk kategori ini.
                  </div>
                )}
              </div>
            ) : (
              /* DASHBOARD BIASA */
              <div className="mt-6 grid gap-5 xl:grid-cols-[1.15fr_1fr]">
                {/* CHART */}
                <div className="rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-800">
                        Visualisasi Data
                      </h2>

                      <p className="text-sm text-slate-500">
                        Perbandingan data tahunan
                      </p>
                    </div>
                  </div>

                  <div className="flex h-[390px] items-end gap-4 rounded-xl border border-slate-100 bg-[linear-gradient(#eef3f6_1px,transparent_1px)] bg-[length:100%_56px] px-5 pb-5">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-1 items-end justify-center gap-2"
                      >
                        <span
                          className="w-3 rounded-t bg-[#0b9887]/75"
                          style={{
                            height: `${38 + ((index * 17) % 42)}%`,
                          }}
                        />

                        <span
                          className="w-3 rounded-t bg-slate-300"
                          style={{
                            height: `${34 + ((index * 13) % 38)}%`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* TABLE */}
                <div className="rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-slate-800">
                      Ringkasan Data
                    </h2>

                    <p className="text-sm text-slate-500">
                      Tabel informasi dashboard
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="min-w-full text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Nama
                          </th>

                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Nilai
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <tr
                            key={index}
                            className="border-t border-slate-100"
                          >
                            <td className="px-4 py-3 text-slate-600">
                              Data {index + 1}
                            </td>

                            <td className="px-4 py-3 font-medium text-slate-800">
                              {(index + 1) * 100}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import HomeHeader from "@/components/home/HomeHeader";

type DashboardCategory = {
  slug: string;
  label: string;
  title: string;
};

const categories: DashboardCategory[] = [
  {
    slug: "akademik",
    label: "Akademik",
    title: "Dashboard Akademik",
  },
  {
    slug: "non-akademik",
    label: "Non-Akademik",
    title: "Dashboard Non-Akademik",
  },
  {
    slug: "penelitian",
    label: "Penelitian",
    title: "Dashboard Penelitian",
  },
  {
    slug: "pengabdian",
    label: "Pengabdian",
    title: "Dashboard Pengabdian Masyarakat",
  },
];

const scenarios = [
  { id: "1", label: "Dashboard 1" },
  { id: "2", label: "Dashboard 2" },
  { id: "3", label: "Dashboard 3" },
];

const metricCards = ["count xx", "sum xx", "avg", "count xx"];

type DashboardPageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ skenario?: string }>;
};

export default async function DashboardCategoryPage({
  params,
  searchParams,
}: DashboardPageProps) {
  const { category: activeSlug } = await params;
  const { skenario } = await searchParams;
  const activeCategory = categories.find((category) => category.slug === activeSlug);

  if (!activeCategory) {
    notFound();
  }

  const activeScenario = scenarios.some((scenario) => scenario.id === skenario)
    ? skenario
    : "1";

  return (
    <main className="min-h-screen bg-[#f5f8fb] text-slate-900">
      <HomeHeader />

      <div className="lg:grid lg:grid-cols-[240px_1fr]">
        <aside className="border-b border-slate-200 bg-white px-4 py-4 shadow-[1px_0_0_rgba(15,23,42,0.05)] lg:sticky lg:top-[76px] lg:min-h-[calc(100vh-76px)] lg:border-b-0 lg:py-6">
          <div className="mb-5">
            <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Kategori
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {categories.map((category) => {
              const isActive = category.slug === activeSlug;

              return (
                <Link
                  key={category.slug}
                  href={`/dashboard/${category.slug}?skenario=${activeScenario}`}
                  className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#0b9887] text-white shadow-sm"
                      : "bg-slate-50 text-slate-700 hover:bg-[#0b9887]/10 hover:text-[#087d70]"
                  }`}
                >
                  {category.label}
                </Link>
              );
            })}
            </div>
          </div>

          <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Skenario
          </div>
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {scenarios.map((scenario) => {
              const isActive = scenario.id === activeScenario;

              return (
                <Link
                  key={scenario.id}
                  href={`/dashboard/${activeSlug}?skenario=${scenario.id}`}
                  className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#e0f4f1] text-[#075f56]"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-[#0b9887]" : "bg-slate-300"}`} />
                  <span className="truncate">
                    {scenario.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </aside>

        <section className="px-4 py-7 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1480px]">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#078b78]">
                {activeCategory.label}
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
                {activeCategory.title} Skenario {activeScenario}
              </h1>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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

          <div className="mt-6 grid gap-5 xl:grid-cols-[1.15fr_1fr]">
            <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-800">
                  Perbandingan xxx
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
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
              <div className="flex h-[390px] items-end gap-4 rounded-lg border border-slate-100 bg-[linear-gradient(#eef3f6_1px,transparent_1px)] bg-[length:100%_56px] px-5 pb-5">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="flex flex-1 items-end justify-center gap-1">
                    <span
                      className="w-3 rounded-t bg-[#0b9887]/75"
                      style={{ height: `${38 + ((index * 17) % 42)}%` }}
                    />
                    <span
                      className="w-3 rounded-t bg-slate-300"
                      style={{ height: `${34 + ((index * 13) % 38)}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
                <div className="mb-4 text-sm font-semibold text-slate-800">
                  Tren xxx
                </div>
                <div className="h-[185px] rounded-lg border border-slate-100 bg-[linear-gradient(#eef3f6_1px,transparent_1px)] bg-[length:100%_44px] p-3">
                  <svg viewBox="0 0 520 150" className="h-full w-full text-slate-400" aria-hidden="true">
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

              <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80">
                <div className="mb-3 text-sm font-semibold text-slate-800">
                  Tabel xxx
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  {Array.from({ length: 7 }).map((_, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="grid grid-cols-4 border-b border-slate-200 last:border-b-0"
                    >
                      {Array.from({ length: 4 }).map((__, cellIndex) => (
                        <div
                          key={cellIndex}
                          className={`px-2 py-2 text-xs ${
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
        </section>
      </div>
    </main>
  );
}

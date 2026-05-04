import DashboardShortcutCard from "@/components/home/DashboardShortcutCard";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";

const shortcuts = [
  {
    title: "Akademik",
    href: "/dashboard/akademik",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 9l10-5 10 5-10 5-10-5Z" />
        <path d="M6 11v4a6 6 0 0 0 12 0v-4" />
        <path d="M22 10v6" />
      </svg>
    ),
  },
  {
    title: "Non-Akademik",
    href: "/dashboard/non-akademik",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M9 7h6" />
        <path d="M12 13a2.5 2.5 0 1 0 0.01 0" />
        <path d="M8 19a4 4 0 0 1 8 0" />
      </svg>
    ),
  },
  {
    title: "Penelitian",
    href: "/dashboard/penelitian",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8" />
        <path d="M8 13h4" />
        <path d="M16 13h.01" />
        <path d="M16 17h.01" />
        <path d="M8 17h4" />
      </svg>
    ),
  },
  {
    title: "Pengabdian Masyarakat",
    href: "/dashboard/pengabdian",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h6v6H4z" />
        <path d="M14 4h6v6h-6z" />
        <path d="M4 14h6v6H4z" />
        <path d="M14 14l6-6" />
        <path d="M14 20l6-6" />
        <path d="M17 17h3v3" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6fbfa] text-slate-900">
      <HomeHeader />

      <section className="relative overflow-hidden">
        <div
          className="h-[330px] bg-cover bg-center bg-no-repeat sm:h-[380px] lg:h-[430px]"
          style={{ backgroundImage: "url('/upn-home-hero.jpeg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(255,255,255,0.38)_72%,rgba(255,255,255,0.9))]" />
      </section>

      <section id="dashboard" className="scroll-mt-24 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-[2rem] font-semibold uppercase tracking-tight text-slate-900">
              Dashboard
            </h2>
            <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-[#0b9887]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {shortcuts.map((shortcut) => (
              <DashboardShortcutCard
                key={shortcut.title}
                title={shortcut.title}
                icon={shortcut.icon}
                href={shortcut.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="tentang-kami" className="scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[24px] bg-white px-8 py-10 shadow-[0_14px_36px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
          <div className="text-center">
            <h2 className="text-[2rem] font-semibold tracking-tight text-slate-900">
              Tentang Kami
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              SADAYA merupakan portal dashboard UPN Veteran Jawa Timur yang
              membantu pengguna internal mengakses informasi akademik,
              non-akademik, penelitian, dan pengabdian masyarakat dalam satu
              tampilan yang lebih ringkas dan mudah dipantau.
            </p>
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}

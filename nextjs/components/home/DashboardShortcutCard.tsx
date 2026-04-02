import type { ReactNode } from "react";

type DashboardShortcutCardProps = {
  title: string;
  icon: ReactNode;
};

export default function DashboardShortcutCard({
  title,
  icon,
}: DashboardShortcutCardProps) {
  return (
    <article className="group rounded-[18px] bg-white px-8 py-7 shadow-[0_14px_36px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0b9887]/10 text-[#0b9887]">
          {icon}
        </div>
        <span className="inline-flex min-w-[138px] items-center justify-center rounded-full bg-[#0b9887] px-5 py-2 text-sm font-semibold text-white">
          {title}
        </span>
      </div>
    </article>
  );
}

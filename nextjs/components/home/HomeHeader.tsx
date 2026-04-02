"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/beranda", key: "home" },
  { label: "Dashboard", href: "#dashboard", key: "dashboard" },
  { label: "Tentang Kami", href: "#tentang-kami", key: "tentang-kami" },
];

function MenuIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function resolveActiveMenu(pathname: string, hash: string) {
  if (pathname !== "/beranda") {
    return "home";
  }

  if (hash === "#dashboard") {
    return "dashboard";
  }

  if (hash === "#tentang-kami") {
    return "tentang-kami";
  }

  return "home";
}

export default function HomeHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [userName, setUserName] = useState("Pengguna SADAYA");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function syncFromBrowser() {
      const hash = window.location.hash;
      setActiveMenu(resolveActiveMenu(pathname, hash));
      setUserName(
        window.localStorage.getItem("sadayaUserName") || "Pengguna SADAYA",
      );
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    syncFromBrowser();
    window.addEventListener("hashchange", syncFromBrowser);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("hashchange", syncFromBrowser);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b9887] text-white shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/beranda" className="flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0">
            <Image
              src="/upn-logo.png"
              alt="Logo UPN Veteran Jawa Timur"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-[1.9rem] font-semibold tracking-tight text-[#F3E425]">
              SADAYA
            </div>
            <div className="text-[12px] font-medium text-[#F3E425]">
              UPN &quot;Veteran&quot; Jawa Timur
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = activeMenu === item.key;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setActiveMenu(item.key)}
                  className={`relative text-[1.05rem] font-semibold transition ${
                    isActive ? "text-[#F3E425]" : "text-[#F3E425]/82 hover:text-[#F3E425]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#F3E425] transition-all ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div ref={dropdownRef} className="relative flex items-center gap-3">
            <span className="max-w-[160px] truncate text-sm font-medium text-[#F3E425]">
              {userName}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F3E425]/80 bg-white/8 text-[#F3E425] transition hover:bg-white/14"
              aria-label="Akun pengguna"
              aria-expanded={isOpen}
              aria-haspopup="menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
              </svg>
            </button>

            {isOpen ? (
              <div className="absolute right-0 top-[calc(100%+12px)] w-48 overflow-hidden rounded-2xl bg-white py-1 text-slate-700 shadow-[0_18px_40px_rgba(15,23,42,0.18)] ring-1 ring-slate-200">
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-sm transition hover:bg-slate-50"
                >
                  <MenuIcon>
                    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
                  </MenuIcon>
                  Profil
                </Link>
                <Link
                  href="/login"
                  onClick={() => window.localStorage.removeItem("sadayaUserName")}
                  className="flex items-center gap-3 px-4 py-3 text-sm transition hover:bg-slate-50"
                >
                  <MenuIcon>
                    <path d="M15 3h4v18h-4" />
                    <path d="M10 17l5-5-5-5" />
                    <path d="M15 12H3" />
                  </MenuIcon>
                  Log Out
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-sm transition hover:bg-slate-50"
                >
                  <MenuIcon>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    <path d="M6 11h12v10H6z" />
                  </MenuIcon>
                  Ganti Password
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

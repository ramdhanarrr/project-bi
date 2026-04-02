"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const inputClassName =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-[#0b9887] focus:ring-3 focus:ring-[#0b9887]/10";

function deriveDisplayName(email: string) {
  const localPart = email.split("@")[0]?.trim();
  if (!localPart) {
    return "Pengguna SADAYA";
  }

  return localPart
    .replace(/[._-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const displayName = deriveDisplayName(email);
    window.localStorage.setItem("sadayaUserName", displayName);
    window.localStorage.setItem("sadayaUserEmail", email);
    router.push("/beranda");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e9efed]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/upn-building.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-900/28 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(15,23,42,0.1))]" />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
        <section className="grid w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/70 bg-white/90 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur sm:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-[260px] items-center justify-center bg-[#0b9887] px-8 py-9 text-white sm:min-h-[560px] sm:px-9 sm:py-10">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                <Image
                  src="/upn-logo.png"
                  alt="Logo UPN Veteran Jawa Timur"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="max-w-[190px] space-y-1">
                <h1 className="text-[1.75rem] font-semibold tracking-tight sm:text-[2rem] text-[#F3E425]">
                  SADAYA
                </h1>
                <p className="text-sm leading-5 text-[#F3E425] sm:text-[15px]">
                  UPN &quot;Veteran&quot; Jawa Timur
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="w-full max-w-sm">
              <div className="mb-8 space-y-3 text-center sm:mb-9">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0b9887]/8 text-[#0b9887]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
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
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Selamat Datang
                  </h2>
                  <p className="mx-auto max-w-xs text-sm leading-6 text-slate-500">
                    Masuk dengan email dan kata sandi untuk melanjutkan ke
                    dashboard.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Masukkan email"
                    className={inputClassName}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-slate-700"
                    >
                      Kata Sandi
                    </label>
                    <a
                      href="#"
                      className="text-sm font-medium text-[#0b9887] transition hover:text-[#087f71]"
                    >
                      Lupa sandi?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="Masukkan kata sandi"
                    className={inputClassName}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>

                <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-[#0b9887] focus:ring-[#0b9887]"
                  />
                  Ingat saya di perangkat ini
                </label>

                <button
                  type="submit"
                  className="h-11 w-full rounded-xl bg-[#0b9887] text-sm font-semibold text-white transition hover:bg-[#087f71]"
                >
                  Masuk
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  Akses khusus untuk pengguna internal SADAYA UPN.
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

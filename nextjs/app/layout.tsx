import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SADAYA UPN",
  description: "Halaman login SADAYA UPN Veteran Jawa Timur",
  icons: {
    icon: "/upn-logo.png",
    shortcut: "/upn-logo.png",
    apple: "/upn-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}

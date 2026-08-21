import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prajwal Kadri | Software Engineer & Researcher",
  description: "Software engineer and machine learning researcher specializing in reliable systems, speech processing, and intelligent information systems.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

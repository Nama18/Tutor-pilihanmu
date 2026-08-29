import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tutor Pilihanmu - Online Tutoring",
  description:
    "Personalized tutoring designed to unlock potential and build lasting confidence. Tailored learning for every age.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${plusJakartaSans.variable} ${workSans.variable} font-body min-h-full flex flex-col`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

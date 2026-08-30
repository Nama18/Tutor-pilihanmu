"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LOGO_URL } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { useLanguage } from "@/lib/i18n";

const SECTION_IDS = ["home", "programs", "about"];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => href.slice(1) === activeSection;

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.programs, href: "#programs" },
    { label: t.nav.about, href: "#about" },
  ];

  // Over the hero: purple-tinted 70% bg, white text. Past it: light 70% bg, dark text.
  const linkColor = scrolled
    ? "text-on-surface-variant hover:text-primary"
    : "text-white/80 hover:text-white";
  const iconColor = scrolled ? "text-primary" : "text-white";
  const barStyle = scrolled
    ? "bg-surface/70 backdrop-blur-md"
    : "bg-primary/70 backdrop-blur-md";
  const toggleStyle = scrolled
    ? "border-outline-variant text-on-surface-variant"
    : "border-white/30 text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Desktop nav */}
      <nav className={`hidden md:block ${barStyle}`}>
        <div className="mx-auto grid max-w-container-max grid-cols-[1fr_auto_1fr] items-center px-6 py-6 lg:px-grid-gutter">
          <a href="#home" className="flex items-center gap-2 justify-self-start">
            <Image
              src={LOGO_URL}
              alt="Tutor Pilihanmu"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-display text-label-bold transition-colors duration-200 ${
                    active
                      ? scrolled
                        ? "text-primary"
                        : "text-white"
                      : linkColor
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full ${
                        scrolled ? "bg-secondary" : "bg-secondary-fixed"
                      }`}
                      aria-hidden
                    />
                  )}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-4 justify-self-end">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              className={`rounded-full border px-4 py-2 font-display text-label-bold transition-colors ${toggleStyle} ${
                scrolled
                  ? "hover:bg-surface-container-low"
                  : "hover:bg-white/10"
              }`}
              aria-label="Switch language / Ganti bahasa"
            >
              {language === "en" ? "ID" : "EN"}
            </button>
            <a
              href="#contact"
              className="font-display text-label-bold text-primary bg-secondary-container px-6 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.nav.startLearning}
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className={`md:hidden ${barStyle}`}>
        <div className="mx-auto flex max-w-container-max items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src={LOGO_URL}
              alt="Tutor Pilihanmu Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </a>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              className={`rounded-full border px-3 py-1.5 font-display text-label-bold transition-colors ${toggleStyle}`}
              aria-label="Switch language / Ganti bahasa"
            >
              {language === "en" ? "ID" : "EN"}
            </button>
            <button
              type="button"
              aria-label={t.nav.toggleMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className={`flex h-11 w-11 items-center justify-center rounded-full p-2 transition-colors hover:bg-surface-container-low/60 focus:outline-none ${iconColor}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-6 w-6"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-outline-variant/30 bg-surface/95 backdrop-blur-md">
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-3 py-3 font-display text-body-md transition-colors ${
                      active
                        ? "bg-secondary-container font-bold text-on-secondary-container"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-secondary-container px-6 py-3.5 font-display text-label-bold text-on-secondary-container transition-colors hover:bg-secondary-fixed"
              >
                {t.nav.startLearning}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

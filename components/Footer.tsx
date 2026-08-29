"use client";

import Image from "next/image";
import { INSTAGRAM_URL, LOGO_URL, TIKTOK_URL } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const ICON_CLASSES =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary-container hover:text-primary";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M16.6 3c.3 1.7 1.3 3.1 2.9 3.8v2.5c-1.1 0-2.2-.3-3.1-.9v6.4c0 3-2.4 5.2-5.2 5.2A5.2 5.2 0 0 1 6 14.8c0-3 2.4-5.2 5.2-5.2.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.5 0-2.6 1.1-2.6 2.6 0 1.5 1.1 2.6 2.6 2.6 1.5 0 2.6-1 2.6-2.5V3h2.8Z" />
    </svg>
  );
}

function SocialLinks() {
  const { t } = useLanguage();
  return (
    <div className="flex gap-4">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.footer.instagram}
        className={ICON_CLASSES}
      >
        <InstagramIcon />
      </a>
      <a
        href={TIKTOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.footer.tiktok}
        className={ICON_CLASSES}
      >
        <TikTokIcon />
      </a>
    </div>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const quickLinks = t.footer.links;

  return (
    <footer className="relative z-20 bg-primary text-white">
      <div className="mx-auto max-w-container-max px-grid-gutter py-section-padding-v-mobile lg:py-section-padding-v">
        {/* Mobile: centered stacked footer */}
        <div className="flex flex-col items-center gap-8 text-center lg:hidden">
          <Image
            src={LOGO_URL}
            alt="Tutor Pilihanmu Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <div className="flex w-full flex-col font-body text-body-md">
            {quickLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="border-b border-white/10 py-2 text-white/80 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <SocialLinks />
          </div>
          <p className="mt-4 font-display text-label-bold text-white/60">
            {t.footer.copyright}
          </p>
        </div>

        {/* Desktop: 4-column footer */}
        <div className="hidden lg:block">
          <div className="mb-12 grid grid-cols-1 gap-12 border-b border-white/20 pb-12 md:grid-cols-4">
            <div className="space-y-6 md:col-span-2">
              <a href="#home" className="flex items-center gap-2">
                <Image
                  src={LOGO_URL}
                  alt="Tutor Pilihanmu"
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </a>
              <p className="max-w-sm font-body text-body-md text-white/80">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="mb-6 font-display text-lg font-bold text-white">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-4 font-body text-body-md">
                {quickLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-white/80 transition-all hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-display text-lg font-bold text-white">
                {t.footer.followUs}
              </h4>
              <SocialLinks />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-base font-display text-label-bold text-white/60 md:flex-row">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useLanguage } from "@/lib/i18n";

export default function MobileBottomNav() {
  const { t } = useLanguage();

  const items = [
    {
      label: t.bottomNav.categories,
      href: "#programs",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="mb-1 h-6 w-6" aria-hidden>
          <path d="M4 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm9 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V5ZM4 14a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3Zm9 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3Z" />
        </svg>
      ),
    },
    {
      label: t.bottomNav.programs,
      href: "#programs",
      active: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="mb-1 h-6 w-6" aria-hidden>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5ZM4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
        </svg>
      ),
    },
    {
      label: t.bottomNav.about,
      href: "#about",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mb-1 h-6 w-6" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <circle cx="12" cy="8" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: t.bottomNav.tutors,
      href: "#tutors",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mb-1 h-6 w-6" aria-hidden>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c1-2.8 3.7-4 7-4s6 1.2 7 4" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface/90 pb-safe pt-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] backdrop-blur-md md:hidden">
      <div className="flex h-16 items-center justify-around">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`relative flex h-full w-full flex-col items-center justify-center transition-colors ${
              item.active
                ? "text-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {item.active && (
              <span
                className="absolute -top-1 h-1 w-12 rounded-full bg-secondary"
                aria-hidden
              />
            )}
            {item.icon}
            <span className="font-display text-[10px] font-bold tracking-wide">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

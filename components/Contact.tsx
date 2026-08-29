"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative z-20 overflow-hidden bg-surface-container-low px-6 py-section-padding-v-mobile lg:px-grid-gutter lg:py-section-padding-v"
    >
      <div className="mx-auto max-w-container-max">
        {/* Mobile CTA banner */}
        <div className="relative mb-12 overflow-hidden rounded-[32px] bg-primary p-8 text-center lg:hidden">
          <div
            className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary-container opacity-50"
            aria-hidden
          />
          <div
            className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-tertiary-fixed opacity-50"
            aria-hidden
          />
          <h2 className="relative z-10 mb-6 font-display text-headline-xl-mobile text-on-primary">
            {t.contact.mobileCtaTitle}
          </h2>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mx-auto flex w-full max-w-xs items-center justify-center rounded-full bg-secondary-container px-8 py-4 font-display text-label-bold text-on-secondary-container shadow-lg transition-all hover:shadow-xl active:scale-95"
          >
            {t.contact.joinNow}
          </Link>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-headline-lg text-on-background">
              {t.contact.title}
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              {t.contact.subtitle}
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-on-surface">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-primary"
                  aria-hidden
                >
                  <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 1.5 6 4.5 6-4.5V7l-6 4.5L6 7v.5Z" />
                </svg>
                <span className="font-body text-body-md">
                  {t.contact.email}
                </span>
              </div>
              <div className="flex items-center gap-4 text-on-surface">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-primary"
                  aria-hidden
                >
                  <path d="M12 2a7 7 0 0 1 7 7c0 4.6-5.4 11.3-6.5 12.5a.7.7 0 0 1-1 0C10.4 20.3 5 13.6 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
                <span className="font-body text-body-md">
                  {t.contact.address}
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-primary p-12 text-center text-white shadow-xl">
            <div
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary-container opacity-50"
              aria-hidden
            />
            <div
              className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-tertiary-fixed opacity-50"
              aria-hidden
            />
            <h3 className="relative z-10 mb-6 font-display text-headline-md text-white">
              {t.contact.cardTitle}
            </h3>
            <p className="relative z-10 mb-8 font-body text-body-md text-white/90">
              {t.contact.cardText}
            </p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-secondary-container px-10 py-5 font-display text-label-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:w-auto"
            >
              <WhatsAppIcon className="h-6 w-6" />
              {t.contact.chatCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

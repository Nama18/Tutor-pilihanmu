"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-20 bg-surface-container-lowest px-6 py-section-padding-v-mobile lg:px-grid-gutter lg:py-section-padding-v"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="mb-2 font-display text-headline-xl-mobile text-on-surface lg:text-headline-lg">
            {t.faq.title}
          </h2>
          <p className="mx-auto max-w-2xl font-body text-body-md text-on-surface-variant">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-primary/30 bg-white shadow-sm"
                    : "border-outline-variant/20 bg-white"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[16px] font-bold text-on-background lg:text-lg">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-primary text-on-primary"
                        : "bg-surface-container-low text-on-surface-variant"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 font-body text-body-md text-on-surface-variant">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

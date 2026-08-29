"use client";

import { SUBJECTS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Subjects() {
  const { t } = useLanguage();

  return (
    <section className="relative z-20 bg-background px-6 py-section-padding-v-mobile lg:px-grid-gutter lg:py-section-padding-v">
      <div className="mx-auto max-w-container-max">
        <div className="mb-10 space-y-4 text-center lg:mb-16">
          <h2 className="font-display text-headline-xl-mobile text-on-background lg:text-headline-lg">
            {t.subjects.title}
          </h2>
          <p className="mx-auto max-w-2xl font-body text-body-md text-on-surface-variant">
            {t.subjects.subtitle}
          </p>
        </div>

        {/* Mobile: horizontal list cards */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {SUBJECTS.map((subject) => {
            const content =
              t.subjects.items.find((item) => item.titleKey === subject.key) ??
              null;
            return (
              <div
                key={subject.key}
                className="flex items-center gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <subject.icon className="h-8 w-8" filled />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-[18px] font-bold text-on-background">
                    {content?.title}
                  </h3>
                  <p className="font-body text-[14px] text-on-surface-variant">
                    {content?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: centered circular icon cards */}
        <div className="hidden grid-cols-1 gap-8 md:grid-cols-2 lg:grid lg:grid-cols-3">
          {SUBJECTS.map((subject) => {
            const content =
              t.subjects.items.find((item) => item.titleKey === subject.key) ??
              null;
            return (
              <div key={subject.key} className="group bg-background text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <subject.icon className="h-10 w-10" filled />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-on-background">
                  {content?.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant">
                  {content?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

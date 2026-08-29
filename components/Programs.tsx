"use client";

import { PROGRAMS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Programs() {
  const { t } = useLanguage();

  return (
    <section id="programs" className="relative z-20 bg-white px-6 py-section-padding-v-mobile lg:px-grid-gutter lg:py-section-padding-v">
      <div className="mx-auto max-w-container-max">
        <div className="mb-10 space-y-4 text-center lg:mb-16">
          <h2 className="font-display text-headline-xl-mobile text-on-background lg:text-headline-lg">
            {t.programs.title}
          </h2>
          <p className="mx-auto max-w-2xl font-body text-body-md text-on-surface-variant">
            {t.programs.subtitle}
          </p>
        </div>

        {/* Mobile: horizontal list cards */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {PROGRAMS.map((program) => {
            const content = t.programs.items.find((item) => item.titleKey === program.key) ?? null;
            return (
              <div
                key={program.key}
                className="flex items-center gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <program.icon className="h-8 w-8" filled />
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
        <div className="hidden grid-cols-1 gap-8 md:grid-cols-2 lg:grid lg:grid-cols-4">
          {PROGRAMS.map((program) => {
            const content = t.programs.items.find((item) => item.titleKey === program.key) ?? null;
            return (
              <div key={program.key} className="group bg-white text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <program.icon className="h-10 w-10" filled />
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

"use client";

import { FEATURES } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

const ACCENT_CLASSES: Record<
  string,
  { icon: string; chip: string; card: string }
> = {
  secondary: {
    icon: "bg-secondary-container text-on-secondary-container",
    chip: "bg-secondary-container text-on-secondary-container",
    card: "bg-surface",
  },
  tertiary: {
    icon: "bg-tertiary-container text-on-tertiary-container",
    chip: "bg-tertiary-container text-on-tertiary-container",
    card: "bg-surface",
  },
  primary: {
    icon: "bg-primary-container text-on-primary-container",
    chip: "bg-primary-container text-on-primary-container",
    card: "bg-surface",
  },
};

export default function Features() {
  const { t } = useLanguage();
  const [personalized, flexible, expert] = FEATURES;
  const content = (key: string) =>
    t.features.items.find((item) => item.titleKey === key) ?? null;

  return (
    <section
      id="about"
      className="relative z-10 bg-background px-6 py-section-padding-v-mobile lg:px-grid-gutter lg:py-section-padding-v"
    >
      <div className="mb-10 text-center lg:mb-16">
        <h2 className="mb-4 font-display text-headline-xl-mobile text-on-surface lg:text-headline-lg">
          {t.features.title}
        </h2>
        <p className="font-body text-body-md text-on-surface-variant">
          {t.features.subtitle}
        </p>
      </div>

      {/* Mobile: bento stack */}
      <div className="mx-auto grid max-w-sm grid-cols-1 gap-4 lg:hidden">
        <div className="flex items-start gap-4 rounded-2xl border border-surface-variant bg-surface p-6 shadow-[0_4px_20px_rgba(18,28,42,0.05)]">
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${ACCENT_CLASSES.secondary.icon}`}
          >
            <personalized.icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="mb-2 font-display text-[20px] text-on-surface">
              {content("personalized")?.title}
            </h3>
            <p className="font-body text-[14px] text-on-surface-variant">
              {content("personalized")?.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[flexible, expert].map((feature) => (
            <div
              key={feature.key}
              className="flex flex-col items-center rounded-2xl border border-surface-variant bg-surface p-6 text-center shadow-[0_4px_20px_rgba(18,28,42,0.05)]"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${ACCENT_CLASSES[feature.accent].icon}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-[16px] text-on-surface">
                {content(feature.key)?.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 3 feature cards */}
      <div className="hidden grid-cols-1 gap-8 md:grid-cols-3 lg:grid">
        {FEATURES.map((feature) => {
          const item = content(feature.key);
          return (
            <div
              key={feature.key}
              className="flex flex-col items-center rounded-2xl border border-outline-variant/20 bg-white p-8 text-center shadow-sm"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${ACCENT_CLASSES[feature.accent].chip}`}
              >
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-on-background">
                {item?.title}
              </h3>
              {item?.description && (
                <p className="font-body text-sm text-on-surface-variant">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

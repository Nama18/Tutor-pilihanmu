"use client";

import Image from "next/image";
import { HERO_IMAGE_URL } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary px-6 pb-48 pt-32 lg:px-grid-gutter"
    >
      {/* Geometric backgrounds */}
      <div className="geometric-bg geometric-bg-1 opacity-90" aria-hidden />
      <div className="geometric-bg geometric-bg-2 opacity-90" aria-hidden />
      <div className="geometric-bg geometric-bg-3 opacity-90" aria-hidden />
      <div className="geometric-bg geometric-bg-4 opacity-90" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Text content */}
        <div className="space-y-6 text-center lg:col-span-6 lg:space-y-8 lg:text-left">
          <h1 className="font-display text-headline-xl-mobile text-white lg:text-headline-xl">
            {t.hero.title}
          </h1>
          <p className="mx-auto max-w-lg font-body text-body-lg text-white/90 lg:mx-0">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center pt-4 lg:justify-start">
            <a
              href="#contact"
              className="flex h-16 min-w-[220px] max-w-xs items-center justify-center gap-2 rounded-full bg-secondary-container px-8 py-4 font-display text-label-bold text-on-secondary-container transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>

        {/* Image area */}
        <div className="relative z-10 mt-4 lg:col-span-6 lg:mt-0">
          <div className="relative p-4">
            <div
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[32px] bg-primary-container"
              aria-hidden
            />
            <Image
              src={HERO_IMAGE_URL}
              alt={t.hero.imageAlt}
              width={800}
              height={600}
              className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom curve into next section */}
      <div className="absolute bottom-0 left-0 z-10 w-full translate-y-[99%] overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[100px] w-[calc(100%+1.3px)] fill-white"
          aria-hidden
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
}

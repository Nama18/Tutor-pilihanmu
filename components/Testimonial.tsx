"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TESTIMONIAL_AVATAR_URL } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const AUTOPLAY_INTERVAL_MS = 3000;

export default function Testimonial() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = t.testimonial.items;
  const count = items.length;
  const current = items[active];

  // Auto-advance the carousel unless the user is hovering.
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <section className="relative z-20 overflow-hidden bg-surface-container-lowest px-6 py-section-padding-v-mobile lg:px-grid-gutter lg:py-section-padding-v">
      {/* Background accents */}
      <div
        className="absolute left-10 top-10 h-24 w-24 rounded-full bg-primary/5 blur-xl"
        aria-hidden
      />
      <div
        className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-secondary/5 blur-xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-container-max">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="mb-2 font-display text-headline-xl-mobile text-on-surface lg:text-headline-lg">
            {t.testimonial.title}
          </h2>
        </div>

        <div
          className="mx-auto max-w-2xl rounded-[32px] border border-outline-variant/20 bg-white p-8 shadow-xl lg:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span
            className="absolute top-8 left-8 hidden text-8xl text-secondary opacity-10 lg:block"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="relative z-10 mb-8 font-body text-body-lg italic text-on-surface-variant">
            &ldquo;{current.quote}&rdquo;
          </p>
          <div className="flex items-center gap-6 border-t border-outline-variant/20 pt-8">
            <Image
              src={TESTIMONIAL_AVATAR_URL}
              alt={current.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full border-2 border-secondary object-cover"
            />
            <div>
              <p className="font-display text-label-bold text-on-surface">
                {current.name}
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                {current.role}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => {
                setPaused(true);
                setActive(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-primary" : "w-2 bg-outline-variant"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

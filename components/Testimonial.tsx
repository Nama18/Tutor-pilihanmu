"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIAL_AVATAR_URL } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const AUTOPLAY_INTERVAL_MS = 3000;
const SWIPE_THRESHOLD_PX = 48;
const DRAG_RESIST_LIMIT_PX = 90;
const ANIMATION_MS = 320;

export default function Testimonial() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = t.testimonial.items;
  const count = items.length;

  // Drag state: offset in px that the track follows the pointer by.
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const isAnimating = useRef(false);
  const isDraggingRef = useRef(false);
  const activeAtDragStart = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  // Bumping this resets the autoplay countdown (after user interaction).
  const [autoplayResetKey, setAutoplayResetKey] = useState(0);

  // Auto-advance the carousel unless the user is hovering or dragging.
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setTimeout(() => {
      if (isDraggingRef.current) return;
      isAnimating.current = true;
      setActive((prev) => (prev + 1) % count);
      window.setTimeout(() => {
        isAnimating.current = false;
      }, ANIMATION_MS);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearTimeout(id);
  }, [paused, count, autoplayResetKey]);

  const goTo = (index: number) => {
    setActive(Math.max(0, Math.min(index, count - 1)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (isAnimating.current) return;
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
    // Capture the slide the user is actually looking at, from the rendered
    // pixel offset — not the React state, which can drift from the visuals.
    const card = e.currentTarget;
    const track = card.firstElementChild as HTMLElement;
    const trackLeft = track.getBoundingClientRect().left;
    const cardLeft = card.getBoundingClientRect().left;
    const slideWidth = track.children[0]?.getBoundingClientRect().width || 1;
    const visualIndex = Math.round((cardLeft - trackLeft) / slideWidth);
    activeAtDragStart.current = ((visualIndex % count) + count) % count;
    isDraggingRef.current = true;
    setIsDragging(true);
    setPaused(true);
    setAutoplayResetKey((k) => k + 1);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const raw = e.clientX - dragStartX.current;
    dragDeltaX.current = raw;
    // Soft resistance past the limit so the drag doesn't feel rigid.
    const abs = Math.abs(raw);
    const offset =
      abs > DRAG_RESIST_LIMIT_PX
        ? Math.sign(raw) *
          (DRAG_RESIST_LIMIT_PX + (abs - DRAG_RESIST_LIMIT_PX) * 0.3)
        : raw;
    setDragOffset(offset);
  };

  const onPointerUp = () => {
    if (dragStartX.current === null) return;
    const delta = dragDeltaX.current;
    const from = activeAtDragStart.current;
    dragStartX.current = null;
    dragDeltaX.current = 0;
    isDraggingRef.current = false;
    setIsDragging(false);

    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) {
      // Not far enough — snap back to the current card.
      setDragOffset(0);
      return;
    }

    // Past the threshold — animate to the next/previous card.
    isAnimating.current = true;
    // Two-step: first re-enable the transition (isDragging -> false) while the
    // track is still offset, then on the next frame move the track to the new
    // card. This guarantees the browser animates from the drag position.
    requestAnimationFrame(() => {
      goTo(from + (delta < 0 ? 1 : -1));
      setDragOffset(0);
    });
    window.setTimeout(() => {
      isAnimating.current = false;
    }, ANIMATION_MS);
  };

  // Each slide is 100% of the track's own width, so move one full width per index.
  const trackTransform = `translateX(calc(${
    -active * 100
  }% + ${dragOffset}px))`;

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
          className="mx-auto max-w-2xl cursor-grab touch-pan-y select-none overflow-hidden rounded-[32px] border border-outline-variant/20 bg-white shadow-xl active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            if (isDragging) onPointerUp();
          }}
        >
          <div
            className="flex will-change-transform"
            style={{
              transform: trackTransform,
              transition: isDragging
                ? "none"
                : "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {items.map((item, i) => (
              <div
                key={item.quote}
                className="relative min-w-full p-8 lg:p-12"
                aria-hidden={i !== active}
              >
                <span
                  className="absolute top-8 left-8 hidden text-8xl text-secondary opacity-10 lg:block"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="relative z-10 mb-8 font-body text-body-lg italic text-on-surface-variant">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-6 border-t border-outline-variant/20 pt-8">
                  <Image
                    src={TESTIMONIAL_AVATAR_URL}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full border-2 border-secondary object-cover"
                  />
                  <div>
                    <p className="font-display text-label-bold text-on-surface">
                      {item.name}
                    </p>
                    <p className="font-body text-sm text-on-surface-variant">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
                setAutoplayResetKey((k) => k + 1);
                goTo(i);
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

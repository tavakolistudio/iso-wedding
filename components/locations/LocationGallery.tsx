"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function LocationGallery({ photos, alt }: { photos: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
        {photos.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {activeIndex !== null ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 sm:p-8"
                  onClick={close}
                >
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="absolute end-4 top-4 text-3xl leading-none text-ivory/80 transition-colors hover:text-ivory"
                  >
                    &times;
                  </button>

                  {photos.length > 1 ? (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        showPrev();
                      }}
                      aria-label="Previous photo"
                      className="absolute start-2 top-1/2 -translate-y-1/2 p-2 text-ivory/80 transition-colors hover:text-ivory sm:start-6"
                    >
                      <ChevronIcon className="h-7 w-7 rotate-180" />
                    </button>
                  ) : null}

                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-full max-h-[85vh] w-full max-w-3xl"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Image
                      src={photos[activeIndex]}
                      alt={alt}
                      fill
                      sizes="90vw"
                      loading="eager"
                      className="object-contain"
                    />
                  </motion.div>

                  {photos.length > 1 ? (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        showNext();
                      }}
                      aria-label="Next photo"
                      className="absolute end-2 top-1/2 -translate-y-1/2 p-2 text-ivory/80 transition-colors hover:text-ivory sm:end-6"
                    >
                      <ChevronIcon className="h-7 w-7" />
                    </button>
                  ) : null}

                  {photos.length > 1 ? (
                    <p className="absolute bottom-4 text-sm tracking-wide text-ivory/70">
                      {activeIndex + 1} / {photos.length}
                    </p>
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

"use client";

import { useState } from "react";
import type { Locale } from "@/content/types";
import { locations } from "@/content/locations";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { FadeIn } from "@/components/ui/FadeIn";

const RANDOM_COUNT = 20;
const REAL_PHOTO_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

interface PoolPhoto {
  src: string;
  alt: string;
  locationName: string;
}

/** Only real photography — skips the abstract SVG placeholders locations fall back to until real photos are added. */
function isRealPhoto(src: string): boolean {
  const lower = src.toLowerCase();
  return REAL_PHOTO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function buildPhotoPool(locale: Locale): PoolPhoto[] {
  return locations.flatMap((location) =>
    [location.image, ...(location.samplePhotos ?? [])]
      .filter(isRealPhoto)
      .map((src) => ({ src, alt: location.imageAlt[locale], locationName: location.name[locale] }))
  );
}

function shuffle<T>(input: T[]): T[] {
  const result = [...input];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function GalleryGrid({ locale }: { locale: Locale }) {
  // Lazy initializer runs once per mount, so every fresh visit to the
  // gallery page gets a newly shuffled selection from all locations' photos.
  const [items] = useState(() => shuffle(buildPhotoPool(locale)).slice(0, RANDOM_COUNT));

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
      {items.map((item, index) => (
        <FadeIn
          key={item.src}
          delay={(index % 6) * 60}
          className="group relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <CinematicImage src={item.src} alt={item.alt} sizes="(min-width: 768px) 33vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-4 start-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="font-heading text-base text-ivory">{item.locationName}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

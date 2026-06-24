"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Locale } from "@/content/types";
import { brand, pages } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const slides = [
  "/images/hero/hero-istanbul-wedding-1.svg",
  "/images/hero/hero-istanbul-wedding-2.svg",
  "/images/hero/hero-istanbul-wedding-3.svg",
];

export function Hero({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const hero = pages.home.hero;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden">
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-charcoal/35" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={985}
            height={521}
            priority
            className="h-auto w-64 rounded-xl shadow-lg sm:w-80 md:w-96"
          />
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-gold-soft">
            {hero.eyebrow[locale]}
          </p>
          <h1 className="mt-4 text-balance font-heading text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
            {hero.headline[locale]}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/90 sm:text-lg">
            {hero.subtitle[locale]}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={`/${locale}/gallery`} variant="inverse">
              {hero.ctaPrimary[locale]}
            </Button>
            <Button href={getWhatsAppLink()} external variant="outline-light">
              {hero.ctaSecondary[locale]}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

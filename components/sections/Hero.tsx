"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { isRtl, type Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface CardTarget {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

const CARD_WIDTH = 64;
const CARD_HEIGHT = 90;

const viewLabel: Record<Locale, string> = { en: "View", fa: "نمایش", tr: "Gör" };
const scrollHint: Record<Locale, string> = {
  en: "Scroll to explore",
  fa: "برای دیدن بیشتر اسکرول کنید",
  tr: "Keşfetmek için kaydırın",
};

/** Deterministic pseudo-random (same value on server + client — avoids hydration mismatch). */
function seeded(n: number): number {
  const x = Math.sin(n * 9999) * 10000;
  return x - Math.floor(x);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp01(t: number): number {
  return Math.min(1, Math.max(0, t));
}

function mapRange(value: number, inMin: number, inMax: number): number {
  return clamp01((value - inMin) / (inMax - inMin));
}

function lerpTarget(a: CardTarget, b: CardTarget, t: number): CardTarget {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    rotation: lerp(a.rotation, b.rotation, t),
    scale: lerp(a.scale, b.scale, t),
    opacity: lerp(a.opacity, b.opacity, t),
  };
}

function AccentLine({ text, accent }: { text: string; accent: string }): ReactNode {
  const index = text.indexOf(accent);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <span className="font-heading text-charcoal">{accent}</span>
      {text.slice(index + accent.length)}
    </>
  );
}

function PhotoCard({
  src,
  alt,
  label,
  target,
}: {
  src: string;
  alt: string;
  label: string;
  target: CardTarget;
}) {
  return (
    <motion.div
      animate={{ x: target.x, y: target.y, rotate: target.rotation, scale: target.scale, opacity: target.opacity }}
      transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.6 }}
      style={{ position: "absolute", width: CARD_WIDTH, height: CARD_HEIGHT, willChange: "transform" }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 22 }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-xl shadow-md ring-1 ring-charcoal/5"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image src={src} alt={alt} fill sizes="120px" className="object-cover" />
          <div className="absolute inset-0 bg-charcoal/10 transition-colors group-hover:bg-transparent" />
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-charcoal p-2 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-gold">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const hero = pages.home.hero;
  const images = pages.home.marquee.images;
  const total = images.length;
  const rtl = isRtl(locale);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });
    observer.observe(node);
    setSize({ width: node.offsetWidth, height: node.offsetHeight });
    return () => observer.disconnect();
  }, []);

  // Drives the scatter -> line -> circle -> arc morph from normal page scroll
  // (no wheel/touch hijacking) so the rest of the page keeps scrolling normally.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const stageRaw = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const stageSmooth = useSpring(stageRaw, { stiffness: 60, damping: 20, mass: 0.4 });

  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (reducedMotion) {
      setStage(4);
      return;
    }
    return stageSmooth.on("change", setStage);
  }, [stageSmooth, reducedMotion]);

  const mouseX = useMotionValue(0);
  const mouseXSmooth = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const [parallax, setParallax] = useState(0);
  useEffect(() => mouseXSmooth.on("change", setParallax), [mouseXSmooth]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || reducedMotion) return;
    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width;
      mouseX.set((relativeX * 2 - 1) * 60);
    };
    node.addEventListener("mousemove", handleMove);
    return () => node.removeEventListener("mousemove", handleMove);
  }, [mouseX, reducedMotion]);

  // Briefly hold the scroll once the arc + headline finish settling (in either
  // direction), so there's a moment to actually read the text before the page
  // continues into the rest of the one-pager. Listens on `window` (not the
  // hero node) so the hold still fires when scrolling back up into the hero
  // from a later section. Doesn't touch touch/trackpad swipes — wheel only.
  useEffect(() => {
    if (reducedMotion) return;

    let locked = false;
    let wasSettled = false;
    let releaseTimeout: ReturnType<typeof setTimeout> | null = null;

    function isInSettledBand() {
      const node = sectionRef.current;
      if (!node) return false;
      const pinnedRange = Math.max(node.offsetHeight - window.innerHeight, 0);
      if (pinnedRange <= 0) return false;
      const lowerBound = pinnedRange * 0.85;
      return window.scrollY >= lowerBound && window.scrollY <= pinnedRange + 4;
    }

    function handleWheel(e: WheelEvent) {
      if (locked) {
        e.preventDefault();
        return;
      }

      const settledNow = isInSettledBand();
      if (settledNow && !wasSettled) {
        locked = true;
        e.preventDefault();
        releaseTimeout = setTimeout(() => {
          locked = false;
        }, 600);
        return;
      }
      wasSettled = settledNow;
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (releaseTimeout) clearTimeout(releaseTimeout);
    };
  }, [reducedMotion]);

  const scatterPositions = useMemo(
    () =>
      images.map((_, i) => ({
        x: (seeded(i) - 0.5) * 1400,
        y: (seeded(i + 50) - 0.5) * 900,
        rotation: (seeded(i + 100) - 0.5) * 160,
        scale: 0.6,
        opacity: 0,
      })),
    [images]
  );

  const targets = useMemo(() => {
    const sign = rtl ? -1 : 1;
    const w = size.width || 1;
    const h = size.height || 1;
    const isMobile = w < 768;
    const minDim = Math.min(w, h);

    return images.map((_, i) => {
      const scatter = scatterPositions[i];

      const lineSpacing = 64;
      const lineX = (i * lineSpacing - (total * lineSpacing) / 2) * sign;
      const line: CardTarget = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };

      const circleRadius = Math.min(minDim * 0.3, 280);
      const circleAngle = (i / total) * 360 * sign;
      const circleRad = (circleAngle * Math.PI) / 180;
      const circle: CardTarget = {
        x: Math.cos(circleRad) * circleRadius,
        y: Math.sin(circleRad) * circleRadius,
        rotation: circleAngle + 90,
        scale: 1,
        opacity: 1,
      };

      // Keep the whole arc — not just its topmost point — inside the
      // viewport, below the fixed text block. The old radius formula only
      // bounded the apex; the two outer cards (which dip lower, per the
      // sine curve) could land far below the fold or under the text.
      const spreadAngle = isMobile ? 110 : 140;
      const halfSpreadRad = (spreadAngle / 2) * (Math.PI / 180);
      const verticalDrop = 1 - Math.cos(halfSpreadRad); // outer cards' drop below the apex, as a multiple of radius
      const horizontalSpan = 2 * Math.sin(halfSpreadRad); // full arc width, as a multiple of radius

      const cardScale = isMobile ? 1.3 : 1.7;
      const halfCardW = (CARD_WIDTH * cardScale) / 2;
      const halfCardH = (CARD_HEIGHT * cardScale) / 2;

      const arcApexY = h * (isMobile ? 0.48 : 0.52); // clears the text block above it
      const maxRadiusForHeight = (h * 0.97 - halfCardH - arcApexY) / verticalDrop;
      const maxRadiusForWidth = (w * 0.47 - halfCardW) / (horizontalSpan / 2);
      const arcRadius = Math.max(60, Math.min(maxRadiusForHeight, maxRadiusForWidth));
      const arcCenterY = arcApexY + arcRadius;
      const startAngle = -90 - spreadAngle / 2;
      const step = total > 1 ? spreadAngle / (total - 1) : 0;
      const idx = rtl ? total - 1 - i : i;
      const arcAngle = startAngle + idx * step;
      const arcRad = (arcAngle * Math.PI) / 180;
      const arc: CardTarget = {
        x: Math.cos(arcRad) * arcRadius + parallax,
        y: Math.sin(arcRad) * arcRadius + arcCenterY,
        rotation: arcAngle + 90,
        scale: cardScale,
        opacity: 1,
      };

      if (stage <= 1) return lerpTarget(scatter, line, clamp01(stage));
      if (stage <= 2) return lerpTarget(line, circle, clamp01(stage - 1));
      if (stage <= 2.6) return circle;
      if (stage <= 3.4) return lerpTarget(circle, arc, clamp01((stage - 2.6) / 0.8));
      return arc;
    });
  }, [images, total, stage, size, rtl, parallax, scatterPositions]);

  // The text block stays fixed and fully visible the whole way through the
  // hero — only the photos move (scatter -> line -> circle -> arc) around
  // it. Only the small "scroll to explore" cue fades away once scrolling
  // actually starts.
  const scrollHintOpacity = 1 - mapRange(stage, 0, 0.4);

  return (
    <section ref={sectionRef} className="relative bg-ivory" style={{ height: reducedMotion ? "100vh" : "280vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((image, i) => (
            <PhotoCard
              key={image.src}
              src={image.src}
              alt={image.alt[locale]}
              label={viewLabel[locale]}
              target={targets[i]}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[8%] z-10 mx-auto flex max-w-[520px] flex-col items-center px-6 text-center sm:top-[10%]">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-strong">{hero.eyebrow[locale]}</p>
          <h1 className="mt-4 text-balance font-body text-3xl font-medium leading-[1.15] text-charcoal sm:text-5xl">
            <span className="block">
              <AccentLine text={hero.headline.line1[locale]} accent={hero.headline.accent1[locale]} />
            </span>
            <span className="block">
              <AccentLine text={hero.headline.line2[locale]} accent={hero.headline.accent2[locale]} />
            </span>
          </h1>
          <p className="mt-5 text-balance text-sm leading-relaxed text-muted sm:text-lg">{hero.description[locale]}</p>
          <div className="pointer-events-auto mt-7 flex flex-wrap items-center justify-center gap-4">
            <Button href={getWhatsAppLink()} external variant="primary">
              {hero.ctaPrimary[locale]}
            </Button>
            <Button href={`/${locale}/gallery`} variant="secondary">
              {hero.ctaSecondary[locale]}
            </Button>
          </div>
          <p
            className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted"
            style={{ opacity: scrollHintOpacity }}
          >
            {scrollHint[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import { pages } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getWhatsAppLink } from "@/lib/whatsapp";

const heroPhotos = [
  { src: "/images/portfolio/portfolio-09.jpg", rotate: "-rotate-6", size: "h-20 w-16 sm:h-24 sm:w-20" },
  { src: "/images/portfolio/portfolio-10.jpg", rotate: "", size: "h-24 w-20 sm:h-28 sm:w-24" },
  { src: "/images/portfolio/portfolio-07.jpg", rotate: "rotate-6", size: "h-20 w-16 sm:h-24 sm:w-20" },
];

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

export function Hero({ locale }: { locale: Locale }) {
  const hero = pages.home.hero;

  return (
    <section className="bg-ivory pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="mx-auto flex max-w-[520px] flex-col items-center px-6 text-center">
        <FadeIn className="mb-7 flex items-end justify-center gap-2.5">
          {heroPhotos.map((photo) => (
            <div
              key={photo.src}
              className={`relative shrink-0 overflow-hidden rounded-xl shadow-md ring-4 ring-ivory ${photo.rotate} ${photo.size}`}
            >
              <Image src={photo.src} alt="" fill sizes="96px" className="object-cover" />
            </div>
          ))}
        </FadeIn>

        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-strong">{hero.eyebrow[locale]}</p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="mt-5 text-balance font-body text-4xl font-medium leading-[1.15] text-charcoal sm:text-5xl">
            <span className="block">
              <AccentLine text={hero.headline.line1[locale]} accent={hero.headline.accent1[locale]} />
            </span>
            <span className="block">
              <AccentLine text={hero.headline.line2[locale]} accent={hero.headline.accent2[locale]} />
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 text-balance text-base leading-relaxed text-muted sm:text-lg">
            {hero.description[locale]}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-4 text-balance text-sm leading-relaxed text-muted/80 sm:text-base">
            {hero.secondParagraph[locale]}
          </p>
        </FadeIn>

        <FadeIn delay={400} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={getWhatsAppLink()} external variant="primary">
            {hero.ctaPrimary[locale]}
          </Button>
          <Button href={`/${locale}/gallery`} variant="secondary">
            {hero.ctaSecondary[locale]}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { getLocationBySlug, locations } from "@/content/locations";
import { ui } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { LocationGallery } from "@/components/locations/LocationGallery";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return buildMetadata({
    locale,
    path: `/locations/${slug}`,
    title: `${location.name[locale]} | ISO Wedding`,
    description: location.description[locale],
    imagePath: location.image,
  });
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const photos = [location.image, ...(location.samplePhotos ?? [])];

  return (
    <>
      <section className="bg-ivory-soft pb-12 pt-36 sm:pt-40">
        <Container>
          <FadeIn>
            <Link href={`/${locale}/locations`} className="text-sm text-muted transition-colors hover:text-charcoal">
              {ui.backToLocations[locale]}
            </Link>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-gold-strong">
              {location.mood[locale]}
            </p>
            <h1 className="mt-3 max-w-2xl font-heading text-3xl leading-tight text-charcoal sm:text-4xl md:text-[2.75rem]">
              {location.name[locale]}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {location.description[locale]}
            </p>
            {location.photoSpots ? (
              <div className="mt-8 max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-strong">
                  {ui.photoSpotsHeading[locale]}
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {location.photoSpots[locale].map((spot) => (
                    <li key={spot} className="flex items-start gap-3 text-sm text-charcoal sm:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-strong" aria-hidden="true" />
                      {spot}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </FadeIn>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <FadeIn>
            <LocationGallery photos={photos} alt={location.imageAlt[locale]} />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

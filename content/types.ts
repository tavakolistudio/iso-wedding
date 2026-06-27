/**
 * Shared content types for the whole site. Every piece of editable copy
 * flows through one of these shapes so adding a language later means
 * widening `locales`, not restructuring components.
 */

export const locales = ["en", "fa", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fa";

export const rtlLocales: Locale[] = ["fa"];
export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

/** A string that must be provided in every supported language. */
export type LocalizedText = Record<Locale, string>;

/** A list of strings (e.g. feature bullets) provided per language. */
export type LocalizedList = Record<Locale, string[]>;

export interface SeoMeta {
  title: LocalizedText;
  description: LocalizedText;
}

export type GalleryCategory =
  | "wedding"
  | "pre-wedding"
  | "couple-session"
  | "istanbul-city";

export interface GalleryItem {
  id: string;
  title: LocalizedText;
  category: GalleryCategory;
  /** Path under /public, e.g. "/images/gallery/gallery-galata-couple-1.svg" */
  image: string;
  alt: LocalizedText;
  location?: LocalizedText;
}

export interface Service {
  id: string;
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  features: LocalizedList;
  image: string;
  imageAlt: LocalizedText;
  whatsappMessage: LocalizedText;
}

export interface Testimonial {
  id: string;
  /** Proper nouns aren't translated. */
  names: string;
  origin: LocalizedText;
  quote: LocalizedText;
  initials: string;
}

export type CrowdLevel = "low" | "medium" | "high";

export interface LocationSpot {
  id: string;
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  mood: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  /** A few real bride & groom sample photos shown alongside this location. */
  samplePhotos?: string[];
  /** Specific named spots within this broader area worth shooting at, shown as a list on the detail page. */
  photoSpots?: LocalizedList;
  /** Used by the "Plan Your Shoot" wizard (components/planner/*). */
  bestTime?: LocalizedText;
  crowdLevel?: CrowdLevel;
  outfitSuggestion?: LocalizedText;
  estimatedDuration?: LocalizedText;
}

export interface NavItem {
  label: LocalizedText;
  path: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  coverImage: string;
  publishedAt: string;
}

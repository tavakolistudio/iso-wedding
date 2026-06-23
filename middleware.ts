import { NextResponse, type NextRequest } from "next/server";

// Kept in sync with content/types.ts manually rather than imported, to keep
// this file dependency-free.
const locales = ["en", "fa", "tr"] as const;
const defaultLocale = "en";

/**
 * Every route lives under /{locale}. Unprefixed paths redirect to the
 * default locale (English) — deliberately deterministic, not
 * Accept-Language sniffed, per the brief.
 */
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
  // Vercel's Edge Runtime threw a runtime ReferenceError (__dirname) when
  // this deployed as an Edge Function. Node.js runtime has no such
  // restriction and middleware logic here is trivial, so there's no
  // latency trade-off worth chasing the edge-only bug for.
  runtime: "nodejs",
};

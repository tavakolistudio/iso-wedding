"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { primaryNav } from "@/content/navigation";
import { brand, ui } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-charcoal" : "text-ivory";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href={`/${locale}`} className="shrink-0">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={985}
            height={521}
            priority
            className="h-10 w-auto rounded-md shadow-sm ring-1 ring-charcoal/5 transition-all duration-300 sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => {
            const href = `/${locale}${item.path === "/" ? "" : item.path}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.path}
                href={href}
                className={`text-sm tracking-wide transition-colors hover:text-gold-strong ${
                  isActive ? "text-gold-strong" : textColor
                }`}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher locale={locale} className={textColor} />
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-2.5 text-sm tracking-wide text-ivory transition-colors hover:bg-gold-strong"
          >
            {ui.checkAvailability[locale]}
          </a>
        </div>

        <MobileNav locale={locale} scrolled={scrolled} />
      </div>
    </header>
  );
}

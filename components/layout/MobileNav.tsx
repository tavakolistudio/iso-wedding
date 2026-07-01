"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { primaryNav } from "@/content/navigation";
import { ui } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function MobileNav({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-charcoal"
      >
        <span className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
        <span className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-ivory px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-6">
            {primaryNav.map((item) => {
              const href = `/${locale}${item.path === "/" ? "" : item.path}`;
              return (
                <Link key={item.path} href={href} className="font-heading text-2xl text-charcoal">
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <Button href={getWhatsAppLink()} external variant="primary" className="w-full">
              {ui.startChat[locale]}
            </Button>
            <LanguageSwitcher locale={locale} className="justify-center text-charcoal" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

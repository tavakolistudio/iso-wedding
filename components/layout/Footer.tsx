import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { footerExtraLinks, primaryNav } from "@/content/navigation";
import { brand, contact, footer as footerContent } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const links = [...primaryNav, ...footerExtraLinks];

  return (
    <footer className="border-t border-border bg-ivory-soft">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={985}
            height={521}
            className="h-12 w-auto rounded-md shadow-sm ring-1 ring-border"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{footerContent.description[locale]}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{brand.parentBrand}</p>
        </div>

        <div>
          <h3 className="font-heading text-base text-charcoal">{footerContent.quickLinksHeading[locale]}</h3>
          <ul className="mt-4 space-y-3">
            {links.map((item) => (
              <li key={item.path}>
                <Link
                  href={`/${locale}${item.path === "/" ? "" : item.path}`}
                  className="text-sm text-muted transition-colors hover:text-gold-strong"
                >
                  {item.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base text-charcoal">{footerContent.contactHeading[locale]}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-strong"
              >
                WhatsApp: {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-strong"
              >
                Instagram: {contact.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-gold-strong">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {footerContent.copyright[locale]}
          </p>
          <a
            href={footerContent.poweredBy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold-strong"
          >
            {footerContent.poweredBy.label[locale]} {footerContent.poweredBy.name}
          </a>
        </Container>
      </div>
    </footer>
  );
}

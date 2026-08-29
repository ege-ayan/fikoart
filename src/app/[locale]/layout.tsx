import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/content/site";
import { personJsonLd, siteOrigin } from "@/lib/seo";
import type { Locale } from "@/content/works";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");

  return {
    metadataBase: new URL(siteOrigin),
    applicationName: site.name,
    authors: [{ name: site.fullName, url: siteOrigin }],
    creator: site.fullName,
    publisher: site.name,
    keywords: [
      "Fikret Insel",
      "Fikoart",
      "2D animation",
      "illustration",
      "visual artist",
      "Ankara",
    ],
    title: {
      default: t("homeTitle"),
      template: `%s — ${site.name}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  const jsonLdLocale: Locale = locale === "tr" ? "tr" : "en";

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <NextIntlClientProvider>
          <JsonLd data={personJsonLd(jsonLdLocale)} />
          <div id="top" />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

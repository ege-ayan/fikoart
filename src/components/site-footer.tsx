import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { SocialLinks } from "./social-icons";

export async function SiteFooter() {
  const t = await getTranslations("Footer");

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <SocialLinks />
        <a
          href="#top"
          className="text-[12px] tracking-[0.12em] uppercase text-muted hover:text-ink"
        >
          {t("backToTop")}
        </a>
        <p className="text-[12px] text-muted">
          {t("rights", { year: 2026, name: site.fullName })}
        </p>
      </div>
    </footer>
  );
}

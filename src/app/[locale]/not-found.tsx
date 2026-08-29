import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  StatusScreen,
  statusActionClassName,
} from "@/components/status-screen";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Errors");

  return {
    title: t("notFoundTitle"),
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function NotFound() {
  const t = await getTranslations("Errors");

  return (
    <StatusScreen
      code="404"
      title={t("notFoundTitle")}
      description={t("notFoundDescription")}
      actions={
        <>
          <Link href="/" className={statusActionClassName}>
            {t("home")}
          </Link>
          <Link href="/portfolio" className={statusActionClassName}>
            {t("portfolio")}
          </Link>
        </>
      }
    />
  );
}

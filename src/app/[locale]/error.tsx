"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  StatusScreen,
  statusActionClassName,
} from "@/components/status-screen";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Errors");

  return (
    <StatusScreen
      code="500"
      title={t("errorTitle")}
      description={t("errorDescription")}
      actions={
        <>
          <button
            type="button"
            onClick={reset}
            className={statusActionClassName}
          >
            {t("retry")}
          </button>
          <Link href="/" className={statusActionClassName}>
            {t("home")}
          </Link>
        </>
      }
    />
  );
}

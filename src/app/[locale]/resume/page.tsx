import { getLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";

export default async function ResumeRedirect() {
  redirect({ href: "/cv", locale: await getLocale() });
}

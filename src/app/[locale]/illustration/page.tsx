import { getLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";

export default async function IllustrationRedirect() {
  redirect({ href: "/portfolio", locale: await getLocale() });
}

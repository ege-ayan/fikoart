import { site } from "@/content/site";

export function PageLoader() {
  return (
    <p className="animate-pulse text-[13px] font-semibold tracking-[0.22em] text-muted uppercase">
      {site.name}
    </p>
  );
}

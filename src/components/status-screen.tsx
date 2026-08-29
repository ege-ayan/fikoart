import type { ReactNode } from "react";

export const statusActionClassName =
  "text-[12px] tracking-[0.16em] uppercase underline underline-offset-4 transition-colors hover:text-muted";

export function StatusScreen({
  code,
  title,
  description,
  actions,
}: {
  code: string;
  title: string;
  description: string;
  actions: ReactNode;
}) {
  return (
    <section className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-180 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
        {code}
      </p>
      <h1 className="mt-5 text-3xl font-medium tracking-tight">{title}</h1>
      <p className="mt-3 max-w-md text-[15px] leading-7 text-muted">
        {description}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        {actions}
      </div>
    </section>
  );
}

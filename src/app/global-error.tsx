"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import {
  StatusScreen,
  statusActionClassName,
} from "@/components/status-screen";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <StatusScreen
          code="500"
          title="Something went wrong"
          description="The site failed to load. Please try again, or return to the homepage."
          actions={
            <>
              <button
                type="button"
                onClick={reset}
                className={statusActionClassName}
              >
                Try again
              </button>
              <Link href="/" className={statusActionClassName}>
                Back to about
              </Link>
            </>
          }
        />
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";

import { preloadImages, uniqueImageSrcs } from "@/lib/preload-images";
import { PageLoader } from "./page-loader";

export function ImageReadyGate({
  srcs,
  children,
}: {
  srcs: readonly string[];
  children: React.ReactNode;
}) {
  const srcKey = uniqueImageSrcs(srcs).join("|");
  const [readyKey, setReadyKey] = useState<string | null>(null);
  const ready = srcKey === "" || readyKey === srcKey;

  useEffect(() => {
    if (srcKey === "") {
      return;
    }

    let cancelled = false;

    preloadImages(srcKey.split("|")).then(() => {
      if (!cancelled) {
        setReadyKey(srcKey);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [srcKey]);

  return (
    <div className="relative">
      <div className={ready ? undefined : "invisible"}>{children}</div>
      {ready ? null : (
        <div className="absolute inset-0 z-10 flex min-h-[calc(100dvh-73px)] items-center justify-center bg-canvas">
          <PageLoader />
        </div>
      )}
    </div>
  );
}

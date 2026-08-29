const PRELOAD_TIMEOUT_MS = 8000;

export function uniqueImageSrcs(srcs: readonly string[]) {
  return [...new Set(srcs.filter(Boolean))];
}

export function preloadImage(src: string, timeoutMs = PRELOAD_TIMEOUT_MS) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    let settled = false;

    const done = () => {
      if (settled) {
        return;
      }

      settled = true;
      clearTimeout(timer);
      image.onload = null;
      image.onerror = null;
      resolve();
    };

    const timer = setTimeout(done, timeoutMs);
    image.onload = done;
    image.onerror = done;
    image.src = src;

    if (image.complete) {
      done();
    }
  });
}

export function preloadImages(srcs: readonly string[]) {
  return Promise.all(uniqueImageSrcs(srcs).map((src) => preloadImage(src)));
}

export function uniqueImageSrcs(srcs: readonly string[]) {
  return [...new Set(srcs.filter(Boolean))];
}

export function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

export function preloadImages(srcs: readonly string[]) {
  return Promise.all(uniqueImageSrcs(srcs).map(preloadImage));
}

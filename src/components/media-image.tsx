import Image from "next/image";

import { getPublicImageSize, isAnimatedSrc } from "@/lib/public-image";

type SharedProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

type FluidProps = SharedProps & {
  fill?: false;
};

type CoverProps = SharedProps & {
  fill: true;
};

export function MediaImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
  loading,
  fill,
}: FluidProps | CoverProps) {
  const resolvedLoading = priority || loading === "eager" ? "eager" : "lazy";
  const unoptimized = isAnimatedSrc(src);

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={resolvedLoading}
        unoptimized={unoptimized}
        priority={priority}
        className={className ?? "object-cover"}
      />
    );
  }

  const { width, height } = getPublicImageSize(src);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={resolvedLoading}
      unoptimized={unoptimized}
      priority={priority}
      className={className ?? "h-auto w-full"}
    />
  );
}

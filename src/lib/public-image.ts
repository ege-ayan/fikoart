import { readFileSync } from "node:fs";
import path from "node:path";

export function publicFilePath(src: string) {
  return path.join(process.cwd(), "public", src.replace(/^\//, ""));
}

export function isAnimatedSrc(src: string) {
  return src.toLowerCase().endsWith(".gif");
}

export function getPublicImageSize(src: string) {
  const size = readImageSize(readFileSync(publicFilePath(src)));

  if (!size.width || !size.height) {
    throw new Error(`Could not read size for ${src}`);
  }

  return size;
}

export function readImageSize(buffer: Buffer) {
  if (isPng(buffer)) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if (isGif(buffer)) {
    return {
      width: buffer.readUInt16LE(6),
      height: buffer.readUInt16LE(8),
    };
  }

  if (isWebp(buffer)) {
    return readWebpSize(buffer);
  }

  if (isJpeg(buffer)) {
    return readJpegSize(buffer);
  }

  throw new Error("Unsupported image format");
}

function isPng(buffer: Buffer) {
  return (
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer.subarray(1, 4).toString("ascii") === "PNG"
  );
}

function isGif(buffer: Buffer) {
  return (
    buffer.length >= 10 && buffer.subarray(0, 3).toString("ascii") === "GIF"
  );
}

function isWebp(buffer: Buffer) {
  return (
    buffer.length >= 16 &&
    buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
    buffer.subarray(8, 12).toString("ascii") === "WEBP"
  );
}

function isJpeg(buffer: Buffer) {
  return buffer.length > 4 && buffer[0] === 0xff && buffer[1] === 0xd8;
}

function readU24LE(buffer: Buffer, offset: number) {
  return (
    buffer[offset]! | (buffer[offset + 1]! << 8) | (buffer[offset + 2]! << 16)
  );
}

function readWebpSize(buffer: Buffer) {
  const kind = buffer.subarray(12, 16).toString("ascii");

  if (kind === "VP8X" && buffer.length >= 30) {
    return {
      width: readU24LE(buffer, 24) + 1,
      height: readU24LE(buffer, 27) + 1,
    };
  }

  if (kind === "VP8L" && buffer.length >= 25) {
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }

  if (kind === "VP8 ") {
    const end = Math.min(buffer.length - 7, 48);
    for (let index = 20; index < end; index += 1) {
      if (
        buffer[index] === 0x9d &&
        buffer[index + 1] === 0x01 &&
        buffer[index + 2] === 0x2a
      ) {
        return {
          width: buffer.readUInt16LE(index + 3) & 0x3fff,
          height: buffer.readUInt16LE(index + 5) & 0x3fff,
        };
      }
    }
  }

  throw new Error("Unsupported WebP layout");
}

function readJpegSize(buffer: Buffer) {
  let offset = 2;

  while (offset < buffer.length - 8) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1]!;

    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    if (marker === 0xd8 || marker === 0xd9 || marker === 0x01) {
      offset += 2;
      continue;
    }

    const length = buffer.readUInt16BE(offset + 2);
    if (length < 2) {
      break;
    }
    offset += 2 + length;
  }

  throw new Error("Could not find JPEG frame size");
}

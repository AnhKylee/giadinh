"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import React from "react";

// Extension priority order: tries gif first, then png, then jpg
const EXTENSIONS = [".gif", ".png", ".jpg", ".jpeg", ".webp", ".avif"];

interface SmartImageProps extends Omit<ImageProps, "src"> {
  src: string | undefined;
}

export default function SmartImage({ src, alt, ...props }: SmartImageProps) {
  const [extIndex, setExtIndex] = useState(0);

  if (!src) return null;

  const currentSrc = `${src}${EXTENSIONS[extIndex]}`;
  const isGif = EXTENSIONS[extIndex] === ".gif";

  function handleError() {
    if (extIndex < EXTENSIONS.length - 1) {
      setExtIndex((i) => i + 1);
    }
  }

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      unoptimized={isGif} // required for animated GIFs
      onError={handleError}
    />
  );
}

import React from "react";
import Image from "next/image";
import { ImageType } from "../../types/types";

export default function Img({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
}: ImageType) {

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
    />
  );
}

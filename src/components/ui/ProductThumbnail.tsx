import React from 'react';
import Image from 'next/image';

interface ProductThumbnailProps {
  item: {
    name?: string;
    image?: string;
    images?: string[];
    [key: string]: any;
  };
  fill?: boolean;
  className?: string;
}

export function ProductThumbnail({ item, fill = true, className = "" }: ProductThumbnailProps) {
  const previewImg = item.images && item.images.length > 0 ? item.images[0] : item.image;
  const isVideo = previewImg?.match(/\.(mp4|mov|webm)$/i) || previewImg?.includes('/video/upload/');

  if (isVideo) {
    return (
      <video
        src={previewImg}
        muted
        loop
        playsInline
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => e.currentTarget.pause()}
        className={`object-cover w-full h-full bg-black ${className}`}
      />
    );
  }

  return (
    <Image
      src={previewImg || '/placeholder.png'}
      alt={item.name || 'Product Image'}
      fill={fill}
      className={`object-cover ${className}`}
    />
  );
}

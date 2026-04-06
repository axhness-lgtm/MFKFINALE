"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className, size = 100 }: BrandLogoProps) {
  return (
    <div 
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="MFK Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}


"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className, size = 100 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-accent", className)}
    >
      {/* Outer Circular Frame */}
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      
      {/* Stylized MFK */}
      <g transform="translate(18, 22) scale(0.9)">
        {/* Stylized M with Peaks */}
        <path
          d="M0 45V15L10 25L20 15V45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
        />
        {/* M's Crown-like peaks */}
        <path
          d="M0 15L4 5L10 12L16 5L20 15"
          fill="currentColor"
        />
        
        {/* Stylized F */}
        <path
          d="M32 15V45M32 15H42M32 30H40"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="butt"
        />
        
        {/* Stylized K */}
        <path
          d="M52 15V45M65 15L52 30L65 45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
        />
      </g>

      {/* Decorative Separator with Diamond Center */}
      <g transform="translate(20, 68)">
        <line x1="0" y1="0" x2="25" y2="0" stroke="currentColor" strokeWidth="0.5" />
        <line x1="35" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Diamond Lattice Pattern */}
        <path
          d="M26 0L30 -3L34 0L30 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M30 -3L34 -6L38 -3L34 0Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <path
          d="M30 3L34 6L38 3L34 0Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <path
          d="M22 -3L26 0L30 -3L26 -6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <path
          d="M22 3L26 0L30 3L26 6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.5"
        />
      </g>

      {/* INTERNATIONAL text */}
      <text
        x="50"
        y="84"
        textAnchor="middle"
        fill="currentColor"
        fontSize="8"
        fontFamily="Playfair Display, serif"
        letterSpacing="0.15em"
        className="font-semibold"
      >
        INTERNATIONAL
      </text>
    </svg>
  );
}

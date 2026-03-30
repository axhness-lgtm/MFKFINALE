"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

/**
 * @file BrandLogo.tsx
 * This is the global brand logo component. 
 * To update the logo manually, simply replace the SVG paths inside the <svg> tag.
 */
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
      {/* 1. Outer Circular Frame - Ultra-thin stroke for a high-fashion, minimal feel */}
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      {/* 2. Core Initials (Stylized MFK) - Thinner weights for cleaner lines */}
      <g transform="translate(15, 25) scale(1.1)">
        {/* Stylized M with Crown-like peaks */}
        <path
          d="M0 35V10L10 20L20 10V35"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        
        {/* Stylized F */}
        <path
          d="M30 10V35M30 10H40M30 22H38"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        
        {/* Stylized K */}
        <path
          d="M50 10V35M62 10L50 22L62 35"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinejoin="miter"
        />
      </g>

      {/* 3. Decorative Separator - Refined hairline thickness */}
      <g transform="translate(25, 75)">
        <line x1="0" y1="0" x2="20" y2="0" stroke="currentColor" strokeWidth="0.3" />
        <line x1="30" y1="0" x2="50" y2="0" stroke="currentColor" strokeWidth="0.3" />
        <path d="M21 0L25 -3L29 0L25 3Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </g>

      {/* 4. Brand Text: INTERNATIONAL - serif caps with wide tracking */}
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fill="currentColor"
        fontSize="5"
        fontFamily="Times New Roman, serif"
        letterSpacing="0.6em"
        className="font-light uppercase"
      >
        INTERNATIONAL
      </text>
    </svg>
  );
}

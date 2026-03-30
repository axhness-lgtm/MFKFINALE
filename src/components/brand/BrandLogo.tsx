"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

/**
 * @file BrandLogo.tsx
 * Use this file to manually update the brand logo. 
 * Replace the SVG paths below with your own design to update it globally.
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
      {/* 1. Outer Circular Frame */}
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      
      {/* 2. Stylized MFK (The Core Initials) */}
      <g transform="translate(18, 22) scale(0.9)">
        {/* Stylized M with Crown-like peaks */}
        <path
          d="M0 45V15L10 25L20 15V45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
        />
        <path d="M0 15L4 5L10 12L16 5L20 15" fill="currentColor" />
        
        {/* Stylized F */}
        <path
          d="M32 15V45M32 15H42M32 30H40"
          stroke="currentColor"
          strokeWidth="3"
        />
        
        {/* Stylized K */}
        <path
          d="M52 15V45M65 15L52 30L65 45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="bevel"
        />
      </g>

      {/* 3. Decorative Diamond Separator */}
      <g transform="translate(20, 68)">
        <line x1="0" y1="0" x2="25" y2="0" stroke="currentColor" strokeWidth="0.5" />
        <line x1="35" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="0.5" />
        <path d="M26 0L30 -3L34 0L30 3Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </g>

      {/* 4. Brand Text: INTERNATIONAL */}
      <text
        x="50"
        y="84"
        textAnchor="middle"
        fill="currentColor"
        fontSize="7"
        fontFamily="Times New Roman, serif"
        letterSpacing="0.25em"
        className="font-bold"
      >
        INTERNATIONAL
      </text>
    </svg>
  );
}

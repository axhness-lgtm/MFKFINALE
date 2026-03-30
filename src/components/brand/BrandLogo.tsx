"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

/**
 * @file BrandLogo.tsx
 * This is the global brand logo component. 
 * 
 * TO MANUALLY UPDATE YOUR LOGO:
 * 1. Open your SVG file in a text editor.
 * 2. Copy the <path>, <circle>, or <g> elements.
 * 3. Replace everything between the <svg> tags below with your copied code.
 * 4. Ensure your viewBox is set to "0 0 100 100" or matches your SVG's dimensions.
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
      {/* Placeholder: Minimal Artisanal Monogram */}
      {/* Replace this section with your own SVG code from WhatsApp */}
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      <g transform="translate(25, 30) scale(0.5)">
         <path
          d="M0 80V0L40 40L80 0V80"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        <path
          d="M100 0V80M100 0H140M100 40H130"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>

      <text
        x="50"
        y="85"
        textAnchor="middle"
        fill="currentColor"
        fontSize="4"
        fontFamily="Times New Roman, serif"
        letterSpacing="0.8em"
        className="font-light uppercase"
      >
        INTERNATIONAL
      </text>
    </svg>
  );
}


"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className, size = 40 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-accent", className)}
    >
      {/* Outer Circle */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="1 2"
      />

      {/* Stylized MFK */}
      <path
        d="M25 65V35L35 45L45 35V65"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 35V65M52 35H62M52 50H60"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 35L80 50L70 65M80 50H68"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Decorative Separator */}
      <path
        d="M35 72H65"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <rect
        x="47"
        y="70"
        width="6"
        height="4"
        transform="rotate(45 50 72)"
        fill="currentColor"
        opacity="0.8"
      />

      {/* INTERNATIONAL text placeholder in SVG */}
      <text
        x="50"
        y="88"
        textAnchor="middle"
        fill="currentColor"
        fontSize="7"
        fontFamily="Playfair Display"
        letterSpacing="0.2em"
        className="font-bold"
      >
        INTERNATIONAL
      </text>
    </svg>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * @file LoadingScreen.tsx
 * The full-screen intro loader. It pulls the BrandLogo component 
 * to ensure the logo is consistent with the rest of the site.
 */
export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(1);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("mfk_loaded_v4");
    if (hasLoaded) {
      setLoading(false);
      // Still dispatch for components that might be listening
      window.dispatchEvent(new Event('loadingComplete'));
      return;
    }

    // Stepped counter sequence (Sophisticated pacing)
    const sequenceSteps = [1, 26, 40, 100];
    let currentStep = 0;

    const runCounter = () => {
      if (currentStep < sequenceSteps.length) {
        setProgress(sequenceSteps[currentStep]);
        currentStep++;

        if (currentStep < sequenceSteps.length) {
          setTimeout(runCounter, 500); // Slightly slower pacing
        } else {
          // Completed steps
          setTimeout(() => {
            setShowLogo(true);
            setTimeout(() => {
              setFadeOut(true);
              setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem("mfk_loaded_v4", "true");
                // Dispatch event to notify that loading is complete
                window.dispatchEvent(new Event('loadingComplete'));
              }, 800);
            }, 800); // Faster logo display
          }, 300);
        }
      }
    };

    const startTimer = setTimeout(runCounter, 500);

    return () => clearTimeout(startTimer);
  }, []);

  if (!loading) return null;

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-800 ease-in-out font-serif",
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="relative flex flex-col items-center justify-center w-80 h-80">
        {/* Circular Progress SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="160"
            cy="160"
            r={radius}
            stroke="currentColor"
            strokeWidth="1"
            fill="transparent"
            className="text-white/5"
          />
          <circle
            cx="160"
            cy="160"
            r={radius}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="transparent"
            strokeDasharray={circumference}
            style={{
              strokeDashoffset,
              transition: "stroke-dashoffset 0.8s ease-in-out", // Smoother stroke movement
              color: "#E8E0D0"
            }}
          />
        </svg>

        {/* Counter Numbers */}
        <div className={cn(
          "text-6xl font-light tracking-tighter text-[#E8E0D0] transition-all duration-1000 absolute",
          showLogo ? "opacity-0 scale-90 blur-sm" : "opacity-100 scale-100 blur-0"
        )}>
          {Math.floor(progress)}
        </div>

        {/* Brand Logo Fade In - Scaled up to fill circle */}
        <div className={cn(
          "absolute transition-all duration-1000 transform",
          showLogo ? "opacity-100 scale-100" : "opacity-0 scale-110"
        )}>
          <Image src="/loading-logo.png" alt="MFK" width={175} height={175} className="object-contain" />
        </div>
      </div>

      {/* Brand Tagline at bottom */}
      <div className="absolute bottom-24 font-serif text-[11px] tracking-[0.2em] text-white/60 animate-fade-in uppercase">
        A <span className="text-accent italic">Legacy</span> of Tailoring, Since <span className="text-accent">1940</span>
      </div>
    </div>
  );
}

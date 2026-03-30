"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "../brand/BrandLogo";
import { cn } from "@/lib/utils";

/**
 * @file LoadingScreen.tsx
 * The full-screen intro loader. It pulls the BrandLogo component 
 * to ensure the logo is consistent with the rest of the site.
 */
export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check session storage to prevent re-playing the animation on every page refresh
    const hasLoaded = sessionStorage.getItem("mfk_loaded");
    
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("mfk_loaded", "true");
      }, 1000); // Wait for fade transition
    }, 2800); // Duration of the brand reveal

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out",
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="relative flex flex-col items-center gap-12">
        {/* The pulsating logo */}
        <div className="animate-pulse-slow">
          <BrandLogo size={180} className="text-accent" />
        </div>
        
        {/* Minimal Gold Loading Bar */}
        <div className="w-48 h-[1px] bg-border/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-accent animate-loading-bar w-full"></div>
        </div>
        
        {/* Brand Tagline */}
        <div className="text-accent/60 uppercase tracking-[0.6em] text-[10px] font-bold animate-fade-in">
          Excellence in Every Stitch
        </div>
      </div>
    </div>
  );
}

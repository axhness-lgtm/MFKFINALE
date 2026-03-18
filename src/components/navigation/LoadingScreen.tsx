
"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "../brand/BrandLogo";
import { cn } from "@/lib/utils";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if session storage has 'loaded' to skip animation on navigation
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
      }, 800);
    }, 2500);

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
      <div className="relative flex flex-col items-center gap-8">
        <div className="animate-pulse-slow">
          <BrandLogo size={180} className="text-accent" />
        </div>
        
        <div className="w-48 h-px bg-border/30 overflow-hidden relative mt-4">
          <div className="absolute top-0 left-0 h-full bg-accent animate-loading-bar"></div>
        </div>
        
        <div className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold animate-fade-in-up">
          Excellence in Every Stitch
        </div>
      </div>
    </div>
  );
}

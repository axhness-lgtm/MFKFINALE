"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * @file LoadingScreen.tsx
 * A minimal luxury loading experience centered on the brand logo.
 * Focuses on smooth opacity transitions and premium simplicity.
 */
export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Skip loader if already seen in this session
    const hasLoaded = sessionStorage.getItem("mfk_loaded_v4");
    if (hasLoaded) {
      setLoading(false);
      window.dispatchEvent(new Event('loadingComplete'));
      return;
    }

    // Trigger basic sequence immediately on mount
    const sequence = async () => {
      // Small delay for clean start
      await new Promise(resolve => setTimeout(resolve, 100));
      setShowLogo(true);

      // Logo visibility duration
      await new Promise(resolve => setTimeout(resolve, 800));
      setFadeOut(true);

      // Final Transition out
      await new Promise(resolve => setTimeout(resolve, 600));
      setLoading(false);
      sessionStorage.setItem("mfk_loaded_v4", "true");
      window.dispatchEvent(new Event('loadingComplete'));
    };

    sequence();
  }, []);

  if (!loading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-800 ease-in-out",
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className={cn(
        "relative transition-opacity duration-1000 ease-in-out",
        showLogo ? "opacity-100" : "opacity-0"
      )}>
        <Image 
          src="/loading-logo.png" 
          alt="MFKhan International" 
          width={220} 
          height={220} 
          className="object-contain"
          priority 
        />
      </div>
    </div>
  );
}

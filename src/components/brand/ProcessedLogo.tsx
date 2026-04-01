"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProcessedLogoProps {
  className?: string;
  size?: number;
}

export function ProcessedLogo({ className, size = 100 }: ProcessedLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.src = "/logo.png";
    img.crossOrigin = "anonymous";
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      const w = canvas.width;
      const h = canvas.height;
      const visited = new Uint8Array(w * h);
      
      // Tolerance for white background removal
      const isWhite = (r: number, g: number, b: number, a: number) => {
        return a > 0 && r > 230 && g > 230 && b > 230;
      };

      // Check if image corners are white
      if (isWhite(data[0], data[1], data[2], data[3])) {
        const queueX = new Int32Array(w * h);
        const queueY = new Int32Array(w * h);
        let qHead = 0;
        let qTail = 0;
        
        // Add all four corners as starting points for the flood fill
        const corners = [[0, 0], [w-1, 0], [0, h-1], [w-1, h-1]];
        for (const [cx, cy] of corners) {
          const idx = (cy * w + cx) * 4;
          if (isWhite(data[idx], data[idx+1], data[idx+2], data[idx+3]) && !visited[cy * w + cx]) {
            visited[cy * w + cx] = 1;
            queueX[qTail] = cx;
            queueY[qTail] = cy;
            qTail++;
          }
        }

        const dx = [1, -1, 0, 0];
        const dy = [0, 0, 1, -1];

        // Process BFS flood fill
        while(qHead < qTail) {
           const cx = queueX[qHead];
           const cy = queueY[qHead];
           qHead++;

           const idx = (cy * w + cx) * 4;
           // Make the pixel transparent
           data[idx] = 0;
           data[idx+1] = 0;
           data[idx+2] = 0;
           data[idx+3] = 0; 

           // check neighbors
           for (let i = 0; i < 4; i++) {
             const nx = cx + dx[i];
             const ny = cy + dy[i];
             if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
               const nIdx = (ny * w + nx) * 4;
               if (!visited[ny * w + nx] && isWhite(data[nIdx], data[nIdx+1], data[nIdx+2], data[nIdx+3])) {
                 visited[ny * w + nx] = 1;
                 queueX[qTail] = nx;
                 queueY[qTail] = ny;
                 qTail++;
               }
             }
           }
        }
        ctx.putImageData(imgData, 0, 0);
      }
      setLoaded(true);
    };
  }, []);

  return (
    <div 
      className={cn("relative flex items-center justify-center transition-opacity duration-500", loaded ? "opacity-100" : "opacity-0", className)}
      style={{ width: size, height: size }}
    >
      <canvas ref={canvasRef} className="w-full h-full object-contain" />
    </div>
  );
}

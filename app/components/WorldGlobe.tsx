"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function WorldGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [232 / 255, 106 / 255, 47 / 255], // brand-orange
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        // New Delhi
        { location: [28.6139, 77.2090], size: 0.1 },
        // Mumbai
        { location: [19.076, 72.8777], size: 0.05 },
        // Dubai
        { location: [25.2048, 55.2708], size: 0.03 },
        // New York
        { location: [40.7128, -74.0060], size: 0.03 },
        // London
        { location: [51.5074, -0.1278], size: 0.03 },
        // Singapore
        { location: [1.3521, 103.8198], size: 0.03 },
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.005;
      },
    } as any);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-[600px] h-[600px] max-w-full aspect-square"
      />
    </div>
  );
}

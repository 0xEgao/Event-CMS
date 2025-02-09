"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { WavyBackground } from "../../components/ui/wavy-background";

interface Props {
  children: ReactNode;
}

export default function WavyBackgroundLayout({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <WavyBackground className="w-full h-full" />
      </div>
      <div 
        className={`relative z-10 w-full max-w-6xl transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
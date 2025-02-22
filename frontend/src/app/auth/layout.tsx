"use client";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <WavyBackground className="absolute inset-0 z-0" />
      <div className="relative z-10 bg-black/40 p-6 rounded-lg w-full max-w-md">
        {children}
      </div>
    </div>
  );
}

"use client"

import { Canvas } from "@react-three/fiber";

export default function AnimatedBackground() {
  return (
    <div className="absolute w-full h-screen">
      <Canvas />
    </div>
  );
}

"use client"

import { Canvas } from "@react-three/fiber";

export default function AnimatedBackground() {
  return (
    <div className="fixed w-full h-screen">
      <Canvas />
    </div>
  );
}

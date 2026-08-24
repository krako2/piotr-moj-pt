"use client"

import { Canvas } from "@react-three/fiber";
import Particles from "@/components/animated-background/particles";

export default function AnimatedBackground() {
  return (
    <div className="fixed w-full h-screen -z-1">
      <Canvas>
        <Particles />
      </Canvas>
    </div>
  );
}

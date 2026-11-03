"use client"

import { Canvas } from "@react-three/fiber";
import Particles from "@/components/animated-background/particles";
import { useState } from "react";

export default function AnimatedBackground() {
  const [ready, setReady] = useState<boolean>(false);

  return (
    <div className={`fixed w-full h-screen -z-1 opacity-0 ${ready ? "opacity-100 fade-in" : ""}`}>
      <Canvas onCreated={() => setReady(true)}>
        <Particles />
      </Canvas>
    </div>
  );
}

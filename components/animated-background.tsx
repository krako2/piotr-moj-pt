"use client"

import { Canvas } from "@react-three/fiber";

export default function AnimatedBackground() {
  return (
    <div className="fixed w-full h-screen -z-1">
      <Canvas>
        <mesh>
          <ambientLight intensity={0.1} />
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

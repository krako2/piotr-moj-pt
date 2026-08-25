import { useRef } from "react";
import { InstancedMesh } from "three";
import { useFrame } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";

export default function Particles() {
  const particleCount: number = 1000;
  const speedDivider: number = 20;
  const particleSize: number = 0.03;
  const particleSpacing: number = 20;
  const ambientLightIntensity: number = 0.2;
  const cube = useRef<InstancedMesh>(null);

  useFrame(({ clock }) => {
    if (cube.current) {
      cube.current.rotation.x = clock.elapsedTime / speedDivider;
      cube.current.rotation.y = clock.elapsedTime / speedDivider;
    }
  });

  return (
    <Instances ref={cube} limit={particleCount}>
      <ambientLight intensity={ambientLightIntensity} />
      <directionalLight intensity={0.5} color="white" position={[0, 3, 5]} />
      <boxGeometry args={[particleSize, particleSize, particleSize]} />
      <meshStandardMaterial color="#06df72" />
      {Array.from({ length: particleCount }).map((_, i) => (
        <Instance key={i} position={[Math.random() * particleSpacing - particleSpacing / 2, Math.random() * particleSpacing - particleSpacing / 2, Math.random() * particleSpacing - particleSpacing / 2]}/>
      ))}
    </Instances>
  );
}

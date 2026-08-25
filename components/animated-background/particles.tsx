import { useRef } from "react";
import { InstancedMesh } from "three";
import { useFrame } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";

export default function Particles() {
  const particleCount: number = 1000;
  const cube = useRef<InstancedMesh>(null);

  useFrame(({ clock }) => {
    if (cube.current) {
      cube.current.rotation.x = clock.elapsedTime;
      cube.current.rotation.y = clock.elapsedTime;
    }
  });

  return (
    <Instances ref={cube} limit={particleCount}>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1.0} color="white" position={[0, 3, 5]} />
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="#06df72" />
      <Instance />
    </Instances>
  );
}

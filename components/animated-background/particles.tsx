import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";


export default function Particles() {
  const cube = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (cube.current) {
      cube.current.rotation.x = clock.elapsedTime;
      cube.current.rotation.y = clock.elapsedTime;
    }
  });

  return (
    <mesh ref={cube}>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1.0} color="white" position={[0, 3, 5]} />
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="#06df72" />
    </mesh>
  );
}

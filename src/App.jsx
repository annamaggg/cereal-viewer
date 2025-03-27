import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <>
    <Canvas camera={{ position: [0, 0, 3] }} style={{ width: '100vw', height: '100vh' }}>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </Canvas>
    </>
  );
}
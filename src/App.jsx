import React, { StrictMode, useRef, Suspense} from 'react'
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three'

export default function App() {
  return (
    <>
    <Canvas camera={{ position: [0, 0, 3] }} style={{ width: '100vw', height: '100vh' }} >
      <OrbitControls /> 
      <ambientLight intensity={0.2} /> 
      <directionalLight position={[-5, 5, 5]} intensity={0.2} color="blue" castShadow />
      <directionalLight position={[5, -5, 5]} intensity={0.2} color="red" />
      <directionalLight position={[2, 5, 3]} intensity={4} />
      <PlaneWithTexture />
    </Canvas>
    </>
  );
}

function PlaneWithTexture() {
  const meshRef = useRef()
  const materialRef = useRef()

  const texture = useLoader(TextureLoader, '/images/sample-image.png')
  const displacementMap = useLoader(TextureLoader, '/images/sample-map.webp')

  return (
    <mesh ref={meshRef} castShadow={true} receiveShadow={true}>
      <planeGeometry args={[20, 20, 364, 364]} />
      <meshStandardMaterial ref={materialRef}  wireframe={false} map={texture} displacementMap={displacementMap} displacementScale={2}  roughness={0.1}  />
    </mesh>
  );
}
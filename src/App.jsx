import React, { StrictMode, useRef, Suspense, useState} from 'react'
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three'
import Form from './components/Form';

export default function App() {
  const [textureUrl, setTextureUrl] = useState('/images/sample-image.png');
  const [depthMapUrl, setDepthMapUrl] = useState('/images/sample-map.webp');

  const handleTextureFileUpload = (uploadedFile) => {
    const objectUrl = URL.createObjectURL(uploadedFile);
    setTextureUrl(objectUrl);
  };

  const handleDepthMapFileUpload = (uploadedFile) => {
    const objectUrl = URL.createObjectURL(uploadedFile);
    setDepthMapUrl(objectUrl);
  };

  return (
    <>
    <Form onTextureFileUpload={handleTextureFileUpload} onDepthMapFileUpload={handleDepthMapFileUpload} />
    <Canvas camera={{ position: [0, 0, 7] }} style={{ width: '100vw', height: '100vh' }} >
      <OrbitControls /> 
      <ambientLight intensity={0.2} /> 
      <directionalLight position={[-5, 5, 5]} intensity={0.2} color="blue" castShadow />
      <directionalLight position={[5, -5, 5]} intensity={0.2} color="red" />
      <directionalLight position={[2, 5, 3]} intensity={4} />
      <PlaneWithTexture textureUrl={textureUrl} depthMapUrl={depthMapUrl} />
    </Canvas>
    </>
  );
}

function PlaneWithTexture({ textureUrl, depthMapUrl }) {
  const meshRef = useRef()
  const materialRef = useRef()

  const texture = useLoader(TextureLoader, textureUrl)
  const displacementMap = useLoader(TextureLoader, depthMapUrl)

  return (
    <mesh ref={meshRef} castShadow={true} receiveShadow={true}>
      <planeGeometry args={[5, 5, 300, 300]} />
      <meshStandardMaterial ref={materialRef}  wireframe={false} map={texture} displacementMap={displacementMap} displacementScale={0.5} roughness={0.1}  />
    </mesh>
  );
}
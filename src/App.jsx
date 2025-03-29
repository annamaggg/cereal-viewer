import React, { StrictMode, Suspense, useState} from 'react'
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three'

import Form from './components/Form';
import DonutCerealGroup from './components/DonutCerealGroup';
import CerealBox from './components/CerealBox';
import Background from './components/Background';

export default function App() {
  const [textureUrl, setTextureUrl] = useState('/images/sample-image.png');
  const [depthMapUrl, setDepthMapUrl] = useState('/images/sample-map.webp');
  const [boxColour, setBoxColour] = useState('#ffff');

  const handleTextureFileUpload = (uploadedFile) => {
    const objectUrl = URL.createObjectURL(uploadedFile);
    setTextureUrl(objectUrl);
  };

  const handleDepthMapFileUpload = (uploadedFile) => {
    const objectUrl = URL.createObjectURL(uploadedFile);
    setDepthMapUrl(objectUrl);
  };

  const handleBoxColourChange = (newColour) => {
    setBoxColour(newColour)
  };

  const texture = useLoader(TextureLoader, textureUrl)
  const displacementMap = useLoader(TextureLoader, depthMapUrl)

  return (
    <>
    <Form onTextureFileUpload={handleTextureFileUpload} onDepthMapFileUpload={handleDepthMapFileUpload} onBoxColourChange={handleBoxColourChange} />
    <Canvas camera={{ position: [0, 0, 7] }} style={{ width: '100vw', height: '100vh' }} >
      <OrbitControls /> 
      <Background />
      <DonutCerealGroup />
      <CerealBox texture={texture} displacementMap={displacementMap} boxColour={boxColour} />

      <ambientLight intensity={0.2} /> 
      <directionalLight position={[-5, 5, 5]} intensity={0.2} color="blue" castShadow />
      <directionalLight position={[5, -5, 5]} intensity={0.2} color="red" />
      <directionalLight position={[2, 5, 3]} intensity={4} />
    </Canvas>
    </>
  );
}


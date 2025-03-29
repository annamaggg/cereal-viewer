import React, { StrictMode, Suspense, useState} from 'react'
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three'
import Form from './components/Form';
import * as THREE from "three";
import DonutCerealGroup from './components/DonutCerealGroup';
import CerealBox from './components/CerealBox';

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

  const texture = useLoader(TextureLoader, textureUrl)
  const displacementMap = useLoader(TextureLoader, depthMapUrl)

  return (
    <>
    <Form onTextureFileUpload={handleTextureFileUpload} onDepthMapFileUpload={handleDepthMapFileUpload} />
    <Canvas camera={{ position: [0, 0, 7] }} style={{ width: '100vw', height: '100vh' }} >
      <OrbitControls /> 
      <Background />
      <DonutCerealGroup />
      <CerealBox texture={texture} displacementMap={displacementMap}  />

      <ambientLight intensity={0.2} /> 
      <directionalLight position={[-5, 5, 5]} intensity={0.2} color="blue" castShadow />
      <directionalLight position={[5, -5, 5]} intensity={0.2} color="red" />
      <directionalLight position={[2, 5, 3]} intensity={4} />
    </Canvas>
    </>
  );
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  void main() {
    float gradient = 0.5 + 0.5 * cos(vUv.y * 3.14159265359); // Smooth cycle
    vec3 colorB = vec3(0.9, 0.8, 0.7);
    vec3 colorA = vec3(0.8, 0.6, 0.9); 
    vec3 finalColor = mix(colorA, colorB, gradient);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function Background() {
  return (
    <mesh scale={50}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        args={[{
          vertexShader,
          fragmentShader,
          uniforms: {},
          side: THREE.BackSide
        }]}
      />
    </mesh>
  );
}

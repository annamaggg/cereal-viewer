import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber' 

export default function DonutCereal({position}) {
  const meshRef = useRef()
  const xRotation = Math.random() * (0.02 - 0.01) + 0.01;
  const yRotation = Math.random() * (0.02 - 0.01) + 0.01;
  const translation = Math.random() * (0.7 - 0.1) + 0.3;

  useFrame(({clock}) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += xRotation; 
      meshRef.current.rotation.y += yRotation; 
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime) * translation;
    }
  })

  return (
    <mesh ref={meshRef} castShadow={true} receiveShadow={true} position={position}>
      <torusGeometry args={[0.2, 0.13, 16, 100]} />
      <meshStandardMaterial color={'salmon'}  />
    </mesh>
  );
}
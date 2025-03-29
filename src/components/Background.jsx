import React, { StrictMode, Suspense, useState} from 'react'
import * as THREE from "three";

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

export default function Background() {
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

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function CerealBox({texture, displacementMap }) {
  const { nodes, materials } = useGLTF('/models/cereal-box.glb')
  return (
    <group dispose={null}>
      <mesh castShadow={true} receiveShadow={true} position={[0, 0, 0.8]}>
        <planeGeometry args={[5.1, 6.8, 300, 300]} />
        <meshStandardMaterial wireframe={false} map={texture} displacementMap={displacementMap} displacementScale={0.5} roughness={0.1}  />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} scale={3.7} rotation={[0, (270 * Math.PI) / 180, 0]} position={[0, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/untitled.glb')

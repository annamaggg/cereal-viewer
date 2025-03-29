import React from 'react'
import DonutCereal from './DonutCereal'

export default function DonutCerealGroup() {

  return (
    <>
    <DonutCereal position={[0, 7, 1]} />
    <DonutCereal position={[1, 5, 0.5]} />
    <DonutCereal position={[-1, 6, 0.5]} />
    <DonutCereal position={[-2, 7, -0.5]} />
    <DonutCereal position={[-0.5, 7, -0.5]} />
    <DonutCereal position={[1.5, 6, -0.5]} />
    <DonutCereal position={[2, 5.5, 0]} />
    <DonutCereal position={[-1.5, 5, 0]} />
    <DonutCereal position={[0.5, 6, 0]} />
    <DonutCereal position={[-0.5, 6.5, 0]} />
    </>
  );
}

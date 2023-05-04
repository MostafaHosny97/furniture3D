import React from 'react'
import { useGLTF } from '@react-three/drei'
import model from "./Recliner.glb"

export function Recliner(props) {
  const { nodes, materials } = useGLTF(model)
  return (
    <group {...props} dispose={null}>
      <group scale={0.30}>
        <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.Leather} />
        <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials.Metal} />
        <mesh castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={materials.PLastic} />
      </group>
    </group>
  )
}

useGLTF.preload(model)

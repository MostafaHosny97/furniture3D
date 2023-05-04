import React from 'react'
import { useGLTF } from '@react-three/drei'
import model from './furniture_-_dresser.glb'

export function Dresser(props) {
  const { nodes, materials } = useGLTF(model)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
      <group scale={0.30}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.MARBLE} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.SMALTO} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.Wood} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials['Wood.002']} />
      </group>
      </group>
    </group>
  )
}

useGLTF.preload(model)

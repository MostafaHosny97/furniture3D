import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import model from './basket_swing_chair.glb'

export function Bakset(props) {
  const { nodes, materials } = useGLTF(model)
  return (
    <group {...props} dispose={null}>
      <group scale={1}>
      <mesh castShadow receiveShadow geometry={nodes.part1_chair1_0.geometry} material={materials.chair1} />
      <mesh castShadow receiveShadow geometry={nodes.part2_chair1_0.geometry} material={materials.chair1} />
      <mesh castShadow receiveShadow geometry={nodes.part4_chair1_0.geometry} material={materials.chair1} />
      <mesh castShadow receiveShadow geometry={nodes.part5_chair1_0.geometry} material={materials.chair1} />
      <mesh castShadow receiveShadow geometry={nodes.part6_chair1_0.geometry} material={materials.chair1} />
      <mesh castShadow receiveShadow geometry={nodes.part7_chair1_0.geometry} material={materials.chair1} />
      <mesh castShadow receiveShadow geometry={nodes.part8_chair1_0.geometry} material={materials.chair1} />
      <mesh castShadow receiveShadow geometry={nodes.cushion_Cushion_0.geometry} material={materials.Cushion} />
      <mesh castShadow receiveShadow geometry={nodes.basket_chair1_0.geometry} material={materials.chair1} />
    </group>
    </group>
  )
}

useGLTF.preload(model)

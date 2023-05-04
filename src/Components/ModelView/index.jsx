import { OrbitControls} from "@react-three/drei";

import { Canvas } from "react-three-fiber";

export default function ModelView({children}) {


  return (
    <Canvas
      shadows
      style={{
        height: "100vh",
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        intensity={7}
        position={[12, 12, 12]}
        shadow-mapSize={[2040, 2040]}
      />
      <hemisphereLight intensity={0.13} position={[0, 50, 0]} /> 
      {children}
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial />
      </mesh>
      <OrbitControls
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
}

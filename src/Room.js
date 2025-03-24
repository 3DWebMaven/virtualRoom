import { useVideoTexture, useTexture, useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export function Model(props) {
  const room = useGLTF("/showroom2.glb")
  const videoTexture = useVideoTexture('../intro.webm')
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={room.scene} />
        <mesh position={[-5,10,47]} rotation={[0, Math.PI, 0]}>
          <meshBasicMaterial map={videoTexture} side={2} color={'#fff'} />
          <planeGeometry args={[30,15]}/>
        </mesh>
      </RigidBody>
    </group>
  )
}

useGLTF.preload("/showroom2.glb")


import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export function Model(props) {
  const { nodes, materials } = useGLTF("/showroom2.glb")
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={useGLTF("/showroom2.glb").scene} />
      </RigidBody>
    </group>
  )
}

useGLTF.preload("/showroom2.glb")


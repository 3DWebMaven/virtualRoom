
import { useGLTF } from "@react-three/drei"

export function Model(props) {
  const { nodes, materials } = useGLTF("/showroom2.glb")
  return (
    <group {...props} dispose={null}>
      <primitive object={useGLTF("/showroom2.glb").scene} />

    </group>
  )
}

useGLTF.preload("/showroom2.glb")

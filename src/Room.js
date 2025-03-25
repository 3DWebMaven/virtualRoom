import { useVideoTexture, useTexture, useGLTF, useAnimations } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export function Model(props) {
  const room = useGLTF("/showroom.glb")
  const videoTexture = useVideoTexture('../intro.webm')
  return (
    <>
      <group dispose={null}>
        <RigidBody type="fixed" colliders="trimesh">
          <primitive object={room.scene} />
          <mesh scale={1} position={[-5, 10, 47]} rotation={[0, Math.PI, 0]}>
            <meshBasicMaterial map={videoTexture} side={2} color={'#fff'} />
            <planeGeometry args={[30, 15]} />
          </mesh>
          <mesh position={[0, 0, -9]}scale={[30, 6, 30]}>
            <meshBasicMaterial transparent opacity={0.0} />
            <boxGeometry />
          </mesh>
        </RigidBody>
      </group>
      <group dispose={null}>
        <AnimatedModel rotation={[0, 2, 0]} position={[-80, -5, 20]} scale={4.5} url={"/models/woman_3_o.glb"} />
        <AnimatedModel rotation={[0, 2, 0]} position={[-90, -5, 25]} scale={4.5} url={"/models/woman_2_o.glb"} />
        <AnimatedModel rotation={[0, -0.5, 0]} position={[-30, -5, 25]} scale={10} url={"/models/man_1.glb"} />
        <AnimatedModel rotation={[0, 2.5, 0]} position={[-110, -5, -25]} scale={3.8} url={"/models/man_2.glb"} />
        <AnimatedModel rotation={[0, 1.5, 0]} position={[-130, -5, 0]} scale={4.5} url={"/models/woman_4_o.glb"} />
      </group>
    </>
  )
}


function AnimatedModel(props) {
  const group = useRef()
  const { nodes, scene, animations } = useGLTF(props.url)
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    // Check if animations exist
    if (animations.length) {
      // Play the first animation (or a specific one if you know its name)
      const action = actions[Object.keys(actions)[0]]
      if (action) {
        action.reset()
        action.play()

        // Set to loop infinitely
        action.setLoop(THREE.LoopRepeat, Infinity)
      }
    }

    return () => {
      // Stop animation on unmount
      Object.values(actions).forEach(action => action.stop())
    }
  }, [actions, animations])

  return <primitive
    ref={group}
    object={scene}
    position={props.position}
    scale={props.scale}
    rotation={props.rotation}
  />
}

useGLTF.preload("/showroom2.glb")
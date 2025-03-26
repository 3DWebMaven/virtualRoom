import { useVideoTexture, useTexture, useGLTF, useAnimations } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export function Model(props) {
  const wallHeight = 100;
  const room = useGLTF("/showroom_o.glb")
  const videoTexture = useVideoTexture('../intro.webm')
  return (
    <>
      <group dispose={null}>
        <primitive object={room.scene} />
        <mesh scale={1} position={[-5, 10, 47]} rotation={[0, Math.PI, 0]}>
          <meshBasicMaterial map={videoTexture} side={2} color={'#fff'} />
          <planeGeometry args={[30, 15]} />
        </mesh>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, 0, -9]} >
            <meshBasicMaterial transparent opacity={0.0} />
            <boxGeometry args={[30, wallHeight, 30]} />
          </mesh>
          <mesh position={[0, 0, -50]} >  
            <meshBasicMaterial transparent opacity={0} />
            <boxGeometry args={[320, wallHeight, 15]} />
          </mesh>
          <mesh position={[0, 0, 50]} >  
            <meshBasicMaterial transparent opacity={0} />
            <boxGeometry args={[320, wallHeight, 15]} />
          </mesh>
          <mesh position={[48, 0, 0]} >  
            <meshBasicMaterial transparent opacity={0} />
            <boxGeometry args={[5, wallHeight, 100]} />
          </mesh>
          <mesh position={[41, 0, 0]} >  
            <meshBasicMaterial transparent opacity={0} />
            <boxGeometry args={[8, wallHeight, 25]} />
          </mesh>
          <mesh position={[-153, 0, 0]} >  
            <meshBasicMaterial transparent opacity={0} />
            <boxGeometry args={[5, wallHeight, 100]} />
          </mesh>
          <mesh position={[-110, 0, 0]} >  
            <meshBasicMaterial transparent opacity={0} />
            <boxGeometry args={[20, wallHeight, 12]} />
          </mesh>
          <mesh position={[-54, 0, 34]} >  
            <meshBasicMaterial transparent opacity={0} />
            <boxGeometry args={[6, wallHeight, 18]} />
          </mesh>
          <mesh position={[-54, 0, -34]} >  
            <meshBasicMaterial transparent opacity={0} />
            <boxGeometry args={[6, wallHeight, 18]} />
          </mesh>
        </RigidBody>
      </group>
      <group dispose={null}>
        {/* <AnimatedModel rotation={[0, 2, 0]} position={[-80, -5, 20]} scale={4.5} url={"/models/woman_3_o.glb"} />
        <AnimatedModel rotation={[0, 2, 0]} position={[-90, -5, 25]} scale={4.5} url={"/models/woman_2_o.glb"} />
        <AnimatedModel rotation={[0, 1.5, 0]} position={[-130, -5, 0]} scale={4.5} url={"/models/woman_4_o.glb"} />
        <AnimatedModel rotation={[0, 3, 0]} position={[-85, -5, -30]} scale={9} url={"/models/woman_1.glb"} />
        <AnimatedModel rotation={[0, -0.5, 0]} position={[-30, -5, 25]} scale={8} url={"/models/man_1.glb"} />
        <AnimatedModel rotation={[0, 2.5, 0]} position={[-110, -5, -25]} scale={3.8} url={"/models/man_2.glb"} />
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
useGLTF.preload("/models/woman_2_o.glb")
useGLTF.preload("/models/woman_3_o.glb")
useGLTF.preload("/models/man_1_o.glb")
useGLTF.preload("/models/man_2_o.glb")
useGLTF.preload("/models/woman_4_o.glb")
useGLTF.preload("/models/woman_1_o.glb")
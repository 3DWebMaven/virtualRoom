import { useVideoTexture, useTexture, useGLTF, useAnimations, Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier"
import { useRef, useEffect, useCallback } from 'react'
import * as THREE from 'three'

export function Model(props) {
  const wallHeight = 100;
  const room = useGLTF("/showroom_o.glb")
  const videoTexture = useVideoTexture('../intro.webm')
  const npcModels = [
    // { rotation: [0, 0.1, 0], position: [-108, -5, 30], scale: 10, url: "/models/woman_5_o.glb" },
    // { rotation: [0, 1.5, 0], position: [-130, -5, 0], scale: 4.5, url: "/models/woman_4_o.glb" },
    // { rotation: [0, 3, 0], position: [-87, -5, -30], scale: 9, url: "/models/man_3_o.glb" },
    // { rotation: [0, -0.5, 0], position: [-30, -5, 25], scale: 0.1, url: "/models/man_4_o.glb" },
    // { rotation: [0, 1.7, 0], position: [-50, -5, -2], scale: 10, url: "/models/man_5.glb"},
    { rotation: [0, 2.5, 0], position: [-110, -5, -25], scale: 3.8, url: "/models/man_2_o.glb" },//wheel chair man
    { rotation: [0, 0, 0], position: [-50, -5, -18], scale: 9.5, url: "/models/employee.glb" },
    // { rotation: [0, 0, 0], position: [-50, -5, -2], scale: 10, url: "/models/E.glb"} ,
    { rotation: [0, 0, 0], position: [-35, -5, -5], scale: 10, url: "/models/F.glb"} ,
    { rotation: [0, -1.5, 0], position: [-85, -5, 10], scale: 10, url: "/models/woman_6_o.glb"},
    { rotation: [0, 0, 0], position: [-50, -5, -2], scale: 10, url: "/models/man_6.glb"} 
  ];

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
        {npcModels.map((model, index) => (
          <AnimatedModel
            key={index}
            rotation={model.rotation}
            position={model.position}
            scale={model.scale}
            url={model.url}
          />
        ))}
      </group>
    </>
  )
}


function AnimatedModel(props) {
  const group = useRef()
  const { nodes, scene, animations } = useGLTF(props.url)
  const { actions } = useAnimations(animations, group)
  const near = 16
  scene.traverse((child) => {
    if ( child.type == 'SkinnedMesh' ) {
      child.frustumCulled = false;
    }
});
  let action
  useEffect(() => {
    // Check if animations exist
    if (animations.length) {
      // Play the first animation (or a specific one if you know its name)
      action = actions[Object.keys(actions)[0]]
      if (action) {
        action.reset()
        action.play()

        // Set to loop infinitely
        action.setLoop(THREE.LoopRepeat, Infinity)
      }
    }

    return () => {
      // Stop animation on unmount
      // Object.values(actions).forEach(action => action.stop())
    }
  }, [actions, animations])

  const INITIAL_ROTATION_THRESHOLD = Math.PI * 2.5;
  const FINAL_ROTATION_THRESHOLD = Math.PI * 3;
  const POSITION_THRESHOLD = -86;
  const ROTATION_SPEED = 0.01;
  const MOVEMENT_SPEED = 0.04;

  // useFrame(({ clock }) => {
  //   const { rotation, position } = group.current;

  //   // First phase: initial rotation
  //   if (rotation.y < INITIAL_ROTATION_THRESHOLD) {
  //     rotation.y += ROTATION_SPEED;
  //     return;
  //   }

  //   // Second phase: horizontal movement
  //   if (position.x < POSITION_THRESHOLD) {
  //     position.x += MOVEMENT_SPEED;

  //     return;
  //   }

  //   // Third phase: final rotation
  //   if (rotation.y < FINAL_ROTATION_THRESHOLD) {
  //     rotation.y += ROTATION_SPEED;
  //   }else {action.paused = true }

  // })

  return (
    <primitive
      side={2}
      ref={group}
      object={scene}
      position={props.position}
      scale={props.scale}
      rotation={props.rotation}
    />
  )
}


useGLTF.preload("/showroom2.glb")
useGLTF.preload("/models/woman_2_o.glb")
useGLTF.preload("/models/woman_3_o.glb")
useGLTF.preload("/models/man_1_o.glb")
useGLTF.preload("/models/man_2_o.glb")
useGLTF.preload("/models/woman_4_o.glb")
useGLTF.preload("/models/woman_1_o.glb")
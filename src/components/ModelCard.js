import React, { Suspense, useEffect, useRef } from "react"
import { useAnimations, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"

const ModelPlayer = props => {
  const group = useRef()
  const actionRef = useRef()
  const { scene, animations } = useGLTF(props.url)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actionRef.current) {
      actionRef.current.paused = !props.isPlaying
    }
  }, [props.isPlaying])

  useEffect(() => {
    if (animations.length) {
      const action = actions[Object.keys(actions)[0]]
      if (action) {
        actionRef.current = action
        action.setLoop(THREE.LoopRepeat, Infinity).play()

        action.paused = !props.isPlaying
      }
    }

    return () => {
      // Object.values(actions).forEach(action => action.stop())
    }
  }, [actions, animations])

  return <primitive ref={group} object={scene} position={props.position} scale={props.scale} rotation={props.rotation} />
}

const ModelCard = ({ isPlaying, rotation, position, scale, url }) => {
  return (
    <Canvas flat gl={{ alpha: true, stencil: false, antialias: true }} camera={{ position: [0, 0, 0] }}>
      <Suspense>
        <ambientLight intensity={1.0} color={"#fff"} />
        <ModelPlayer isPlaying={isPlaying} rotation={rotation} position={position} scale={scale} url={url} />
      </Suspense>
    </Canvas>
  )
}

export default ModelCard

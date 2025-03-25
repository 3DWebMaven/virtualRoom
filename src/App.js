import { useRef, useState, useCallback, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { SoftShadows, Float, CameraControls, Sky, PerformanceMonitor, Loader, OrbitControls, PointerLockControls, KeyboardControls, useTexture, Environment } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import { easing } from "maath"
import { Model as Room } from "./Room"
import { Player } from "./Player"
import { Html } from "@react-three/drei"

const InidiatorComponent = (props) => {
  const near = 8;
  const [hover, set] = useState(null)
  const texture = useTexture('../image_icon.png')

  const onMove = useCallback((e) => {
    e.stopPropagation()
    if (e.distance < near) {
      set(e.eventObject.name)
    }
  }, [])
  const onOut = useCallback(() => set(null), [])
  const onClick = useCallback((e) => {
    e.stopPropagation()
    if (e.distance < near) {
      console.log('e', e)
    }
  }, [])

  return (
    <mesh
      name={props.name}
      position={props.position}
      scale={hover === props.name ? 2 : 1}
      onPointerMove={onMove}
      onPointerOut={onOut}
      onClick={onClick}>
      <meshBasicMaterial
        map={texture}
        transparent={true}
        side={2}
        // Additional controls:
        color={"#fff"} // Tint the texture
        opacity={1} // Control transparency
        depthTest={true} // Whether to test against depth buffer
        depthWrite={true} // Whether to write to depth buffer
      />
      <circleGeometry args={[0.3, 32]} /> {/* radius = 1, segments = 32 */}
    </mesh>
  )
}

export default function App() {
  const [bad, set] = useState(false)
  const { impl, debug, enabled, samples, ...config } = useControls({
    debug: true,
    enabled: true,
    size: { value: 35, min: 0, max: 100, step: 0.1 },
    focus: { value: 0.5, min: 0, max: 2, step: 0.1 },
    samples: { value: 16, min: 1, max: 40, step: 1 }
  })
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}>
        <Canvas flat gl={{ alpha: true, stencil: false, antialias: true }}
          camera={{ position: [1, 2, 20], fov: 50 }}>
          {debug && <Perf position="top-left" />}
          <PerformanceMonitor onDecline={() => set(true)} />
          <ambientLight intensity={1.0} color={'#fff'} />
          {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} /> */}
          <Physics gravity={[0, -50, 0]} debug>
            <Player />
            <Room/>
          </Physics>
          <Sky sunPosition={[100, 20, 100]} />
          <PointerLockControls />
          {/* <InidiatorComponent name="indicator_1" position={[1, 0, 0]} /> */}
        </Canvas>
      </KeyboardControls>
    </>
  )
}

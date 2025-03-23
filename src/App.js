import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { SoftShadows, Float, CameraControls, Sky, PerformanceMonitor, Loader, OrbitControls, PointerLockControls, KeyboardControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import { easing } from "maath"
import { Model as Room } from "./Room"
import { Player } from "./Player"

// function Light() {
//   const ref = useRef()
//   useFrame((state, delta) => {
//     easing.dampE(ref.current.rotation, [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0], 0.2, delta)
//   })
//   return (
//     <group ref={ref}>
//       <directionalLight position={[5, 5, -8]} castShadow intensity={5} shadow-mapSize={2048} shadow-bias={-0.001}>
//         <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
//       </directionalLight>
//     </group>
//   )
// }

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
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      <Canvas shadows camera={{ position: [5, 2, 10], fov: 50 }}>
        {debug && <Perf position="top-left" />}
        <PerformanceMonitor onDecline={() => set(true)} />
        {enabled && <SoftShadows {...config} samples={bad ? Math.min(6, samples) : samples} />}
        {/* <color attach="background" args={["#d0d0d0"]} /> */}
        {/* <OrbitControls enablePan={false} enableZoom={false} /> */}
        <fog attach="fog" args={["#d0d0d0", 8, 150]} />
        <ambientLight intensity={0.4} />
        {/* <Light /> */}
        <Physics gravity={[0, -30, 0]} debug>
          <Player />
          <Room scale={0.5} position={[0, -1, 0]} />
        </Physics>
        <Sky sunPosition={[100, 20, 100]} />
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  )
}

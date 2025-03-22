import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { SoftShadows, Float, CameraControls, Sky, PerformanceMonitor, Loader, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import { easing } from "maath"
import { Model as Room } from "./Room"

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
    <Canvas shadows camera={{ position: [5, 2, 10], fov: 50}}>
      {debug && <Perf position="top-left" />}
      <PerformanceMonitor onDecline={() => set(true)} />
      {enabled && <SoftShadows {...config} samples={bad ? Math.min(6, samples) : samples} />}
      {/* <color attach="background" args={["#d0d0d0"]} /> */}
      <OrbitControls enablePan={false} enableZoom={false}/>
      <fog attach="fog" args={["#d0d0d0", 8, 150]} />
      <ambientLight intensity={0.4} />
      {/* <Light /> */}
      <Room scale={0.5} position={[0, -1, 0]} />
      <Sky inclination={0.5} scale={20} />
    </Canvas>
  )
}

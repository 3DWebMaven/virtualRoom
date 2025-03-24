import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { SoftShadows, Float, CameraControls, Sky, PerformanceMonitor, Loader, OrbitControls, PointerLockControls, KeyboardControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import { easing } from "maath"
import { Model as Room } from "./Room"
import { Player } from "./Player"
import { Html } from "@react-three/drei"

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

const InidiatorComponent = () => {
  return (
    <Html
      position={[0, 2, 0]}
      distanceFactor={15}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)'
        }}
        onClick={() => console.log('clicked')}
      >
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2018 6.2678C9.80304 5.63979 8.88261 5.6515 8.49998 6.28947L8.2233 6.75079C7.92391 7.24996 7.2501 7.36496 6.8021 6.99334C6.37162 6.63626 5.72736 6.72649 5.41154 7.18809L3.73718 9.63533C3.2831 10.299 3.75835 11.2 4.5625 11.2H11.5139C12.3025 11.2 12.7808 10.3298 12.3581 9.66399L10.2018 6.2678ZM13.6667 1.4C14.219 1.4 14.6667 1.84772 14.6667 2.4V11.6C14.6667 12.1523 14.219 12.6 13.6667 12.6H2.33333C1.78105 12.6 1.33333 12.1523 1.33333 11.6V2.4C1.33333 1.84771 1.78105 1.4 2.33333 1.4H13.6667ZM16 1C16 0.447716 15.5523 0 15 0H1C0.447715 0 0 0.447715 0 1V13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13V1ZM2.66667 4.2C2.66667 3.4272 3.264 2.8 4 2.8C4.736 2.8 5.33333 3.4272 5.33333 4.2C5.33333 4.9735 4.736 5.6 4 5.6C3.264 5.6 2.66667 4.9735 2.66667 4.2Z" fill="#414141"></path></svg>
      </div>
    </Html>
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
        {/* <color attach="background" args={["#d0d0d0"]} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Light /> */}
        <fog attach="fog" args={["#d0d0d0", 8, 150]} />
        <ambientLight intensity={0.4} />
        <Physics gravity={[0, -30, 0]} debug>
          <Player />
          <Room scale={0.5} position={[0, -1, 0]} />
        </Physics>
        <Sky sunPosition={[100, 20, 100]} />
        <PointerLockControls />
        <InidiatorComponent />
      </Canvas>

      {/* Center Dot */}
      <div 
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: '8px',
          height: '8px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 1000
        }}
      />
    </KeyboardControls>
  )
}

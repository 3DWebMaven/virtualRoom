import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { useRef, useState, useCallback, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { SoftShadows, Float, CameraControls, Sky, PerformanceMonitor, Loader, OrbitControls, PointerLockControls, KeyboardControls, useTexture, Environment, Preload } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import { easing } from "maath"
import { Model as Room } from "./Room"
import { Player } from "./Player"
import { Html } from "@react-three/drei"


export default function App() {
  const [open, setOpen] = useState(false);
  const pointlockRef = useRef()

  const [bad, set] = useState(false)

  const InidiatorComponent = (props) => {
    const near = 16;
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
        // pointlockRef.current.unlock();
        setTimeout(() => {
          pointlockRef.current.unlock();
          setOpen(true)
        }, 100);
      }
    }, [])

    return (
      <mesh
        name={props.name}
        position={props.position}
        rotation={props.rotation}
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
        <circleGeometry args={[0.8, 32]} /> {/* radius = 1, segments = 32 */}
      </mesh>
    )
  }
  return (
    <>
      <Lightbox
        open={open}
        close={() => { 
          setOpen(false);
          setTimeout(() => {
            pointlockRef.current.lock();
          }, 100);
        }}
        slides={[
          {
            src: "../image.webp",
            alt: "image 1",
            width: 3840,
            height: 2560,
            // srcSet: [
            //   { src: "../image_icon.png", width: 320, height: 213 },
            //   { src: "../image_icon.png", width: 640, height: 427 },
            //   { src: "../image_icon.png", width: 1200, height: 800 },
            //   { src: "../image_icon.png", width: 2048, height: 1365 },
            //   { src: "../image_icon.png", width: 3840, height: 2560 },
            // ],
          },
        ]}
        plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />

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
          <Suspense>
            <Preload all />
            <Perf position="top-right" />
            <PerformanceMonitor onDecline={() => set(true)} />
            <ambientLight intensity={1.0} color={'#fff'} />
            {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} /> */}
            <Physics gravity={[0, 0, 0]} debug>
              <Player />
              <Room />
            </Physics>
            <Sky sunPosition={[100, 20, 100]} />
            {!open && <PointerLockControls ref={pointlockRef} />}
            <InidiatorComponent name="indicator_1" rotation={[0, 2.5, 0]} position={[-41, 3, 35]} />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  )
}

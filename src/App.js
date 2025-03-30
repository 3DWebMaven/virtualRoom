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
import Faq from "./components/Faq"
import { Html } from "@react-three/drei"
import { INITIATOR_CONFIGS, slides } from "./config/config";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
export default function App() {
  const [open, setOpen] = useState(false);
  const [selectdIndicator, setIndicator] = useState(0)
  const pointlockRef = useRef()
  // const [showFAQ, setShowFAQ] = useState(false)
  const [show, setShow] = useState(false);
  const [bad, set] = useState(false)
 
  const onModalHide = () => {
    setShow(false);
    setTimeout(() => {
      pointlockRef.current.lock();
    }, 100);
  }
  const onESCkeyInModal = () => {
    setShow(false);
    setTimeout(() => {
      pointlockRef.current.lock();
    }, 100);
  }

  const InidiatorComponent = (props) => {
    const near = 16;
    const [hover, set] = useState(null)
    const texture = useTexture(props.name === "employee" ? '../employee_icon.png' : '../image_icon.png');


    const handleDistanceCheck = (e) => e.distance < near;

    const onMove = useCallback((e) => {
      e.stopPropagation();
      if (handleDistanceCheck(e)) set(e.eventObject.name);
    }, []);
    
    const onOut = useCallback(() => set(null), []);
    
    const onClick = useCallback((e) => {
      e.stopPropagation();
      if (handleDistanceCheck(e)) {
        setIndicator(e.eventObject.name);
        setTimeout(() => {
          pointlockRef.current.unlock();
          props.name === "employee" ? setShow(true) : setOpen(true);
        }, 100);
      }
    }, []);

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
  useEffect(()=> {
    console.log(show)
  })

  return (
    <>
      <Modal size="xl" onEscapeKeyDown ={() => onESCkeyInModal()}  backdrop = "static" show={show} fullscreen={false} onHide={() => onModalHide()}>
        <Modal.Header closeButton>
          <Modal.Title>Q&A</Modal.Title>
        </Modal.Header>
        <Modal.Body><Faq /></Modal.Body>
      </Modal>


      <Lightbox
        open={open}
        close={() => {
          setOpen(false);
          setTimeout(() => {
            pointlockRef.current.lock();
          }, 100);
        }}
        slides={slides(selectdIndicator)}
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
            <Perf position="top-left" />
            <PerformanceMonitor onDecline={() => set(true)} />
            <ambientLight intensity={1.0} color={'#fff'} />
            <Physics gravity={[0, 0, 0]} debug>
              <Player />
              <Room setShowFAQ={setShow} />
            </Physics>
            <Sky sunPosition={[100, 20, 100]} />

            {show || !open && <PointerLockControls ref={pointlockRef} />}

            {INITIATOR_CONFIGS.map(config => (
              <InidiatorComponent
                key={config.name}
                {...config}
              />
            ))}
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  )
}

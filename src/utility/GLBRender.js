import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useGLTF } from "@react-three/drei"
import config from '../config/config.json'

export function GLBRender(props) {
    const gltf = useGLTF(props.assetInfo.model_path, (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        loader.setDRACOLoader(dracoLoader);
    });
    return (
        <primitive 
        // key={key}
            rotation={props.assetInfo.rotation}
            position={props.assetInfo.position}
            scale={props.assetInfo.scale}
            object={gltf.scene} />
    );
}


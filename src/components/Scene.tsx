"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if(!ref.current) return;
        ref.current.rotation.x += delta * 0.15;
        ref.current.rotation.y += delta * 0.2;
        ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    });

    return (
        <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
            <mesh ref={ref} scale={1.8}>
                <icosahedronGeometry args={[1, 22]} />
                <MeshDistortMaterial
                    color="#8b5cf6"
                    attach="material"
                    distort={0.45}
                    speed={1.8}
                    roughness={0.2}
                    metalness={0.85}
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className="scene-stage">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <color attach="background" args={["#050816"]} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[4, 4, 4]} intensity={2.4} />
                <pointLight position={[ -4, -2, -2]} intensity={2} color="#22d3ee" />
                <Orb />
                <Sparkles count={120} scale={12} size={2} speed={0.4} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Galaxy() {
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 2000;
  
  // Calculate particle positions and colors
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const colorInside = new THREE.Color("#ff6030");
    const colorOutside = new THREE.Color("#1b3984");

    for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 5;
        const spinAngle = radius * 5;
        const branchAngle = ((i % 3) / 3) * Math.PI * 2;
        
        const x = Math.cos(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * (radius * 0.3);
        const y = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * (5 - radius);
        const z = Math.sin(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * (radius * 0.3);
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const mixedColor = colorInside.clone().lerp(colorOutside, radius / 5);
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, [particleCount]);

  useFrame((state) => {
    if (pointsRef.current) {
        pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          count={particleCount}
          args={[positions, 3]}
        />
        <bufferAttribute 
          attach="attributes-color"
          count={particleCount}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={true}
        transparent={true}
      />
    </points>
  );
}

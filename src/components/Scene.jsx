import React, { useRef, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Scene = ({ currentSection, scrollProgress }) => {
  const sphereRef = useRef();
  const colorRef = useRef(new THREE.Color("#00ffff"));

  const colors = [
    "#00ffff",
    "#ff00ff",
    "#00ff00",
    "#ff8c00",
    "#1e90ff",
    "#ff1493"
  ];

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t * 0.5) * 0.5;
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.material.distort = THREE.MathUtils.lerp(0.3, 0.7, (Math.sin(t) + 1) / 2);

      // Smooth color transition
      const targetColor = new THREE.Color(colors[currentSection] || colors[0]);
      colorRef.current.lerp(targetColor, 0.05);
      sphereRef.current.material.color = colorRef.current;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </>
  );
};

export default Scene;

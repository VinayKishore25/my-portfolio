"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Loading fallback component
function LoadingSpinner() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#60a5fa" wireframe />
    </mesh>
  );
}

// Fresnel shader for atmosphere glow
function getFresnelMat({ rimHex = 0x0088ff, facingHex = 0x000000 } = {}) {
  const uniforms = {
    color1: { value: new THREE.Color(rimHex) },
    color2: { value: new THREE.Color(facingHex) },
    fresnelBias: { value: 0.1 },
    fresnelScale: { value: 1.0 },
    fresnelPower: { value: 4.0 },
  };

  const vs = `
    uniform float fresnelBias;
    uniform float fresnelScale;
    uniform float fresnelPower;
    
    varying float vReflectionFactor;
    
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
    
      vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
    
      vec3 I = worldPosition.xyz - cameraPosition;
    
      vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
    
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fs = `
    uniform vec3 color1;
    uniform vec3 color2;
    
    varying float vReflectionFactor;
    
    void main() {
      float f = clamp( vReflectionFactor, 0.0, 1.0 );
      gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
    }
  `;

  return new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vs,
    fragmentShader: fs,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });
}

// Starfield component
function Starfield({ numStars = 2000 }) {
  const points = useMemo(() => {
    const verts = [];
    const colors = [];

    for (let i = 0; i < numStars; i += 1) {
      const radius = Math.random() * 25 + 25;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      verts.push(x, y, z);

      const col = new THREE.Color().setHSL(0.6, 0.2, Math.random());
      colors.push(col.r, col.g, col.b);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    return geo;
  }, [numStars]);

  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y -= 0.0002;
    }
  });

  return (
    <points ref={starsRef} geometry={points}>
      <pointsMaterial size={0.2} vertexColors />
    </points>
  );
}

// Earth Globe Component
function EarthGlobe() {
  const earthRef = useRef();
  const lightsRef = useRef();
  const cloudsRef = useRef();
  const glowRef = useRef();

  // Load textures with error handling
  const textures = useLoader(
    THREE.TextureLoader,
    [
      "/textures/00_earthmap1k.jpg",
      "/textures/02_earthspec1k.jpg",
      "/textures/01_earthbump1k.jpg",
      "/textures/03_earthlights1k.jpg",
      "/textures/04_earthcloudmap.jpg",
      "/textures/05_earthcloudmaptrans.jpg",
    ],
    undefined,
    (error) => {
      console.error("Error loading textures:", error);
    }
  );

  const [earthMap, earthSpec, earthBump, earthLights, cloudMap, cloudTrans] =
    textures;

  const detail = 12;
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, detail), []);

  const earthMaterial = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      map: earthMap,
      specularMap: earthSpec,
      bumpMap: earthBump,
      bumpScale: 0.04,
    });
  }, [earthMap, earthSpec, earthBump]);

  const lightsMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: earthLights,
      blending: THREE.AdditiveBlending,
    });
  }, [earthLights]);

  const cloudsMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: cloudMap,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      alphaMap: cloudTrans,
    });
  }, [cloudMap, cloudTrans]);

  const fresnelMaterial = useMemo(() => getFresnelMat(), []);

  useFrame(() => {
    if (earthRef.current) earthRef.current.rotation.y += 0.002;
    if (lightsRef.current) lightsRef.current.rotation.y += 0.002;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0023;
    if (glowRef.current) glowRef.current.rotation.y += 0.002;
  });

  return (
    <group rotation-z={(-23.4 * Math.PI) / 180}>
      {/* Earth Mesh */}
      <mesh ref={earthRef} geometry={geometry}>
        <primitive object={earthMaterial} attach="material" />
      </mesh>

      {/* City Lights */}
      <mesh ref={lightsRef} geometry={geometry}>
        <primitive object={lightsMaterial} attach="material" />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef} geometry={geometry} scale={1.003}>
        <primitive object={cloudsMaterial} attach="material" />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh ref={glowRef} geometry={geometry} scale={1.01}>
        <primitive object={fresnelMaterial} attach="material" />
      </mesh>
    </group>
  );
}

// Main Globe component
export default function Globe({ className = "" }) {
  return (
    <div
      className={`w-full h-full ${className}`}
      style={{ minHeight: "100%", position: "relative" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.LinearSRGBColorSpace,
        }}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        {/* Lighting */}
        <directionalLight
          position={[-2, 0.5, 1.5]}
          intensity={2.0}
          color="#ffffff"
        />

        {/* Starfield */}
        <Starfield numStars={2000} />

        {/* Earth with Suspense boundary */}
        <Suspense fallback={<LoadingSpinner />}>
          <EarthGlobe />
        </Suspense>

        {/* Orbit controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

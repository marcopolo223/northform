"use client";

import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  ACESFilmicToneMapping,
  Box3,
  BufferGeometry,
  Color,
  DataTexture,
  Float32BufferAttribute,
  LinearFilter,
  Mesh,
  MeshPhysicalMaterial,
  RepeatWrapping,
  Vector3,
} from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";

function cortexBumpMap() {
  const size = 256;
  const data = new Uint8Array(size * size * 4);
  const hash = (x: number, y: number) => {
    const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return n - Math.floor(n);
  };
  const noise = (x: number, y: number) => {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = x - ix;
    const fy = y - iy;
    const ux = fx * fx * (3 - 2 * fx);
    const uy = fy * fy * (3 - 2 * fy);
    return (
      hash(ix, iy) * (1 - ux) * (1 - uy) +
      hash(ix + 1, iy) * ux * (1 - uy) +
      hash(ix, iy + 1) * (1 - ux) * uy +
      hash(ix + 1, iy + 1) * ux * uy
    );
  };
  const fbm = (x: number, y: number) => {
    let value = 0;
    let amplitude = 0.5;
    let frequency = 1;
    for (let i = 0; i < 5; i++) {
      value += amplitude * noise(x * frequency, y * frequency);
      amplitude *= 0.52;
      frequency *= 2.05;
    }
    return value;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x / 26, y / 26);
      const tone = Math.floor(88 + n * 150);
      const i = (y * size + x) * 4;
      data[i] = tone;
      data[i + 1] = tone;
      data[i + 2] = tone;
      data[i + 3] = 255;
    }
  }

  const texture = new DataTexture(data, size, size);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.magFilter = LinearFilter;
  texture.minFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function setSphericalUvs(geometry: BufferGeometry) {
  const position = geometry.getAttribute("position");
  const uvs = new Float32Array(position.count * 2);
  const vertex = new Vector3();
  for (let i = 0; i < position.count; i++) {
    vertex.set(position.getX(i), position.getY(i), position.getZ(i)).normalize();
    uvs[i * 2] = 0.5 + Math.atan2(vertex.z, vertex.x) / (Math.PI * 2);
    uvs[i * 2 + 1] = 0.5 + Math.asin(Math.min(1, Math.max(-1, vertex.y))) / Math.PI;
  }
  geometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
}

function useBrainMesh() {
  const { scene } = useGLTF("/models/brain.glb");
  const bumpMap = useMemo(() => cortexBumpMap(), []);
  const tissue = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: new Color("#c9a394"),
        roughness: 0.44,
        metalness: 0,
        sheen: 0.42,
        sheenColor: new Color("#efcfc4"),
        sheenRoughness: 0.58,
        clearcoat: 0.28,
        clearcoatRoughness: 0.46,
        bumpMap,
        bumpScale: 0.018,
        envMapIntensity: 0.85,
      }),
    [bumpMap],
  );

  const model = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const size = box.getSize(new Vector3());
    const max = Math.max(size.x, size.y, size.z) || 1;
    const cloned = scene.clone(true);
    cloned.scale.setScalar(1.02 / max);
    cloned.traverse((node) => {
      if (!(node instanceof Mesh)) return;
      const geometry = mergeVertices(node.geometry.clone());
      geometry.computeVertexNormals();
      setSphericalUvs(geometry);
      node.geometry = geometry;
      node.material = tissue;
      node.castShadow = false;
      node.receiveShadow = false;
    });
    return cloned;
  }, [scene, tissue]);

  useEffect(() => {
    return () => {
      tissue.dispose();
      bumpMap.dispose();
    };
  }, [bumpMap, tissue]);

  return model;
}

function Controls({ reducedMotion }: { reducedMotion: boolean }) {
  const [autoRotate, setAutoRotate] = useState(!reducedMotion);
  const [motionPref, setMotionPref] = useState(reducedMotion);
  const resume = useRef<number>(0);

  if (motionPref !== reducedMotion) {
    setMotionPref(reducedMotion);
    setAutoRotate(!reducedMotion);
  }

  useEffect(() => () => window.clearTimeout(resume.current), []);

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.65}
      autoRotate={autoRotate}
      autoRotateSpeed={0.55}
      minPolarAngle={Math.PI / 2.7}
      maxPolarAngle={Math.PI / 1.6}
      onStart={() => {
        window.clearTimeout(resume.current);
        setAutoRotate(false);
      }}
      onEnd={() => {
        if (reducedMotion) return;
        resume.current = window.setTimeout(() => setAutoRotate(true), 2200);
      }}
    />
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const model = useBrainMesh();

  return (
    <>
      <ambientLight intensity={0.55} color="#f4ebe4" />
      <hemisphereLight color="#fff6ea" groundColor="#d7cfc4" intensity={0.42} />
      <directionalLight position={[2.4, 3.1, 2.1]} intensity={1.15} color="#fff7ee" />
      <directionalLight position={[-2.2, 0.9, -1.4]} intensity={0.32} color="#c5d0d4" />
      <Environment preset="studio" environmentIntensity={0.48} />
      <Center>
        <group rotation={[0.12, 0.45, 0.02]}>
          <primitive object={model} />
        </group>
      </Center>
      <Controls reducedMotion={reducedMotion} />
    </>
  );
}

export default function BrainCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true, toneMapping: ACESFilmicToneMapping }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.toneMappingExposure = 1.06;
      }}
      camera={{ position: [0, 0.04, 2.45], fov: 32 }}
      style={{ touchAction: "none" }}
    >
      <Suspense fallback={null}>
        <Scene reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/brain.glb");

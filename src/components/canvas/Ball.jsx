import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();
  const [hue, setHue] = useState(0);
  
  // Color cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Convert HSL to hex color
  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };
  
  // Auto-rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      //meshRef.current.rotation.x += delta * 1;
      //meshRef.current.rotation.y += delta * 1;
    }
  });
  
  // Get current color from hue
  const currentColor = hslToHex(hue, 70, 70);
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh 
        ref={meshRef} 
        castShadow 
        receiveShadow 
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color={currentColor} 
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading 
        />
        <Decal 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          scale={1} 
          map={decal} 
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
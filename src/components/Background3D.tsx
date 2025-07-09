import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const FloatingShape = ({ position, scale = 1, color = "#4F8EF7" }: { 
  position: [number, number, number]; 
  scale?: number; 
  color?: string; 
}) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.6}
      floatIntensity={0.6}
      floatingRange={[0, 0.1]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
};

const TorusShape = ({ position, scale = 1 }: { 
  position: [number, number, number]; 
  scale?: number; 
}) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.4}
      floatingRange={[0, 0.2]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <MeshDistortMaterial
          color="#22C55E"
          transparent
          opacity={0.5}
          distort={0.2}
          speed={1.5}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Modern floating shapes */}
        <FloatingShape position={[-3, 2, -2]} scale={0.8} color="#4F8EF7" />
        <FloatingShape position={[3, -1, -3]} scale={1.2} color="#A855F7" />
        <FloatingShape position={[1, 3, -4]} scale={0.6} color="#EF4444" />
        
        <TorusShape position={[-2, -2, -2]} scale={0.7} />
        <TorusShape position={[2, 1, -3]} scale={0.9} />
        
        {/* Additional geometric shapes */}
        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
          <mesh position={[0, -3, -5]} scale={1.5}>
            <octahedronGeometry args={[1]} />
            <MeshDistortMaterial
              color="#F59E0B"
              transparent
              opacity={0.4}
              distort={0.1}
              speed={1}
              roughness={0.5}
            />
          </mesh>
        </Float>

        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
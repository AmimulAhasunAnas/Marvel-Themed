import { useRef, memo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface EnergyCoreProps {
  color?: string;
  coreColor?: string;
}

export const EnergyCore = memo(({ color = "#ED1D24", coreColor ="#48a9fe" }: EnergyCoreProps) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
      </mesh>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial 
            color={coreColor} 
            speed={3} 
            distort={0.4} 
            emissive={coreColor} 
            emissiveIntensity={5} 
            roughness={0}
          />
        </mesh>
      </Float>

      {/* Decorative segments around the core */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 6]} position={[1.2, 0, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.4]} />
          <meshStandardMaterial color="#444" metalness={1} roughness={0.2} />
        </mesh>
      ))}

      <pointLight color={coreColor} intensity={20} distance={5} />
    </group>
  );
});

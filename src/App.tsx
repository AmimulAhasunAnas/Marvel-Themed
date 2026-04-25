/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, PerspectiveCamera, Environment } from "@react-three/drei";
import { useState, memo, Suspense } from "react";
import { Cpu, Shield, Crosshair } from "lucide-react";

// Data
import { HERO_DATA, THEMES, Theme } from "./data/heroData";

// Components
import { EnergyCore } from "./components/EnergyCore";
import { Sidebar } from "./components/Sidebar";
import { DossierCard } from "./components/DossierCard";
import { PowerGrid } from "./components/PowerGrid";
import { MissionHistory } from "./components/MissionHistory";
import { CertificationGrid } from "./components/CertificationGrid";
import { AcademicOrigin } from "./components/AcademicOrigin";

// Optimized 3D Background Component
const SceneBackground = memo(({ theme }: { theme: Theme }) => (
  <div className="fixed inset-0 -z-20 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color={theme.core} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[20, 64, 64]} scale={[-1, 1, 1]}>
          <meshBasicMaterial color={theme.theme} wireframe opacity={0.03} transparent />
        </Sphere>
      </Float>
    </Canvas>
  </div>
));

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(THEMES[0]);

  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-x-hidden font-sans selection:bg-white selection:text-black">
      
      {/* Theme Switcher Sidebar */}
      <Sidebar 
        themes={THEMES} 
        currentTheme={currentTheme} 
        onThemeSelect={setCurrentTheme} 
      />

      {/* Immersive 3D Background */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentTheme.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <SceneBackground theme={currentTheme} />
        </motion.div>
      </AnimatePresence>

      {/* Header Panel */}
      <header 
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5 transition-colors duration-1000 shadow-2xl"
        style={{ 
          background: `linear-gradient(to bottom, ${currentTheme.theme}15, #060606)`
        }}
      >
        <div className="absolute inset-0 z-0 opacity-60">
          <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
              <EnergyCore color={currentTheme.theme} coreColor={currentTheme.core} />
              <Environment preset="night" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div 
            key={currentTheme.id + "_title"}
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-block bg-white px-6 md:px-12 py-4 md:py-8 -skew-x-12 shadow-[0_40px_80px_rgba(0,0,0,0.8)] border-4 border-black mb-6 uppercase"
          >
            <h1 
              className="font-comic text-5xl sm:text-7xl md:text-[100px] leading-[0.8] tracking-tighter transition-colors duration-1000 select-none" 
              style={{ color: currentTheme.theme }}
            >
              {HERO_DATA.name}
            </h1>
          </motion.div>
          <div className="flex flex-col items-center gap-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-3xl font-black uppercase tracking-[0.4em] text-gray-500"
            >
              {HERO_DATA.alias}
            </motion.h2>
            <motion.div 
              animate={{ backgroundColor: currentTheme.theme, width: [60, 120, 60] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="h-1 transition-colors duration-1000"
            />
          </div>
        </div>

        {/* Identity Status HUD */}
        <div className="absolute bottom-10 left-10 text-[10px] font-mono opacity-40 space-y-2 hidden lg:block select-none">
          <div className="flex items-center gap-2">
            <Shield size={12} style={{ color: currentTheme.theme }} className="transition-colors duration-1000" />
            <span>IDENTITY.VERIFIED: {HERO_DATA.identity}</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-1000" style={{ color: currentTheme.core }}>
            <Crosshair size={12} />
            <span>SYSTEM.LOCK: {currentTheme.id.toUpperCase()}_MOD_V4</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-32 space-y-32">
        
        {/* Profile and Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-12">
            <DossierCard data={HERO_DATA} theme={currentTheme} />
            <PowerGrid powers={HERO_DATA.powers} theme={currentTheme} />
            
            {/* Tool Arsenal */}
            <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-10 rounded-3xl shadow-2xl">
              <h3 className="font-comic text-2xl uppercase mb-10 flex items-center gap-4 transition-colors duration-1000" style={{ color: currentTheme.theme }}>
                <Cpu size={24} className="fill-current" /> Technical Arsenal
              </h3>
              <div className="flex flex-wrap gap-2">
                {HERO_DATA.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded font-black text-[9px] uppercase tracking-widest text-gray-500 hover:text-white hover:border-white transition-all cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="lg:col-span-8 space-y-32">
            <CertificationGrid commendations={HERO_DATA.commendations} theme={currentTheme} />
            <MissionHistory missions={HERO_DATA.missions} theme={currentTheme} />
            <AcademicOrigin academy={HERO_DATA.academy} theme={currentTheme} />
          </section>
        </div>
      </main>

      {/* Action Footer */}
      <footer 
        className="relative py-48 border-t border-white/5 bg-gradient-to-t from-black to-transparent overflow-hidden text-center transition-all duration-1000" 
        style={{ borderColor: currentTheme.theme + '22' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Canvas>
             <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <mesh>
                   <octahedronGeometry args={[5, 0]} />
                   <meshBasicMaterial color={currentTheme.theme} wireframe />
                </mesh>
             </Float>
          </Canvas>
        </div>

        <motion.div 
          className="relative z-10 flex flex-col items-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <motion.a 
            href={`mailto:${HERO_DATA.contact.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group bg-white text-black px-12 md:px-24 py-6 md:py-10 rounded-full font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-xl md:text-2xl transition-all hover:tracking-[0.8em] cursor-pointer shadow-[0_20px_80px_rgba(255,255,255,0.1)] block overflow-hidden"
          >
            <span className="relative z-10">Initiate Contact</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10 duration-1000"
              style={{ backgroundColor: currentTheme.theme }}
            />
          </motion.a>
          
          <div className="mt-16 space-y-4">
             <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
               System Protocol Active &mdash; {currentTheme.id.toUpperCase()}_LINK_STABLE
             </p>
             <p className="text-[10px] text-gray-800 uppercase tracking-widest font-bold">
               Designed for Heroic Impact &copy; {new Date().getFullYear()}
             </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

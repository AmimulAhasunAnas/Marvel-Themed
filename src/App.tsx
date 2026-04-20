/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { 
  Zap, 
  Shield, 
  Target, 
  Trophy, 
  Mail, 
  Globe, 
  Github, 
  Linkedin,
  Rocket,
  Cpu,
  Waves,
  Crosshair,
  Star,
  CloudLightning,
  Eye,
  Activity,
  Bug,
  Cat
} from "lucide-react";

// 3D Energy Core Component (ARC Reactor)
function EnergyCore({ color = "#ED1D24", coreColor ="#48a9fe" }) {
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

      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 6]} position={[1.2, 0, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.4]} />
          <meshStandardMaterial color="#444" metalness={1} roughness={0.2} />
        </mesh>
      ))}

      <pointLight color={coreColor} intensity={20} distance={5} />
    </group>
  );
}

const HERO_DATA = {
  id: "anas",
  name: "MD. AMIMUL AHASUN ANAS",
  alias: "The Sentinel of Cyberspace",
  identity: "Publicly Known",
  base: "Dhaka, Bangladesh / Remote",
  summary: "Analytical Cyber Security Analyst dedicated to proactive defense and enterprise-grade threat mitigation. Expert in SIEM management, EDR deployment, and Vulnerability Management. A collaborative problem-solver focused on leveraging emerging security technologies to secure critical infrastructure in evolving threat landscapes.",
  powers: [
    { name: "SIEM & SOC Operations", level: 98 },
    { name: "Threat Hunting & Strategy", level: 95 },
    { name: "VAPT & Risk Assessment", level: 92 },
    { name: "Endpoint Protection (EDR)", level: 90 },
    { name: "Network Infrastructure", level: 88 }
  ],
  tools: [
    "IBM QRadar", "Splunk", "Wazuh", "Alien Vault", "Nessus", "Burp Suite", 
    "Acunetix", "Wireshark", "Checkpoint Firewall", "Picus", "Postman", "Nmap"
  ],
  commendations: [
    "Splunk Core Certified Power User",
    "Certified in Cybersecurity (CC) - ISC²",
    "Tenable Vulnerability Management",
    "IBM Cyber Threat Management",
    "Tenable Cloud Security Administrator",
    "CyberOps Associate",
    "Ethical Hacker",
    "Network Defense",
    "Endpoint Security",
    "Cybersecurity Fundamentals"
  ],
  missions: [
    {
      company: "Thakral Information Systems",
      role: "Cyber Security Analyst",
      period: "MAY 2024 - PRESENT",
      description: "Coordinating technical implementations of high-level security platforms for elite financial institutions.",
      projects: [
        {
          title: "Pubali Bank",
          desc: "IBM QRadar SIEM and CP4S Enhancement. Built custom parsing rules. Reduced incident response times by 15%."
        },
        {
          title: "Berger",
          desc: "Splunk SIEM Deployment. Architected deployment for 100+ Nodes including Fortigate & Office 365 logs. +45% Log efficiency."
        },
        {
          title: "Prime Bank PLC",
          desc: "IBM QRadar QNI, CP4S, and SOAR Implementation. Hardware upgrades and system integration. +30% Log efficiency."
        },
        {
          title: "IFIC Bank PLC",
          desc: "IBM QRadar SIEM and SOAR Enhancement. Developed custom parsing rules. Integrated log sources like SentinelOne and FortiGate."
        }
      ],
      achievements: [
        "Increased threat detection accuracy by 35% through custom use cases",
        "Reduced false positives by 40% via meticulous building blocks adjustment",
        "Centralized monitoring for 5+ major security systems (FortiGate, Trend Micro)",
        "Mastered IBM QRadar, Trend Micro, and Cisco Firepower integrations"
      ]
    },
    {
      company: "ThinkEZ Limited",
      role: "System Engineer, Cyber Security",
      period: "NOV 2023 - MAY 2024",
      description: "Specialized in core security platforms and deep packet inspection within professional Cyber Range lab environments.",
      achievements: [
        "Completed intensive training on EDR, SIEM (QRadar), and BAS (Picus)",
        "Gained hands-on expertise in threat hunting and complex network lab debugging",
        "Mastered network security fundamentals including Checkpoint Firewall configuration"
      ]
    },
    {
      company: "ADN Diginet",
      role: "Data Analytics Trainee",
      period: "MAY 2023 - JULY 2023",
      description: "Focused on large-scale data integrity and visualization for actionable security insights.",
      achievements: [
        "Performed web scraping for datasets over 100,000 records",
        "Developed 10+ data visualizations and reports using Power BI",
        "Presented actionable findings to key stakeholders"
      ]
    }
  ],
  academy: [
    { 
      school: "American International University-Bangladesh", 
      degree: "Bachelor of Science in Computer Science Engineering", 
      year: "2019 - 2023 | CGPA: 3.19" 
    },
    { 
      school: "Joypurhat Govt. College", 
      degree: "Higher Secondary Certificate | Science", 
      year: "2018 | GPA: 4.33" 
    },
    { 
      school: "R.B Govt. High School, Joypurhat", 
      degree: "Secondary School Certificate | Science", 
      year: "2016 | GPA: 4.83" 
    }
  ],
  contact: {
    email: "anasamimulahasun@gmail.com",
    linkedin: "https://www.linkedin.com/in/amimulahasunanas/",
    github: "#"
  }
};

const THEMES = [
  { id: 'ironman', name: 'Iron Man', theme: '#ED1D24', core: '#48a9fe', Icon: Cpu },
  { id: 'thor', name: 'Thor', theme: '#00D2FF', core: '#FFD700', Icon: CloudLightning },
  { id: 'panther', name: 'Black Panther', theme: '#A330FF', core: '#FFFFFF', Icon: Cat },
  { id: 'spiderman', name: 'Spider-Man', theme: '#E23636', core: '#5091CD', Icon: Bug },
  { id: 'cap', name: 'Capt. America', theme: '#0047AB', core: '#FFFFFF', Icon: Shield },
  { id: 'hulk', name: 'Hulk', theme: '#4B9B32', core: '#8A2BE2', Icon: Activity },
  { id: 'strange', name: 'Dr. Strange', theme: '#FF4500', core: '#008080', Icon: Eye }
];

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(THEMES[0]);

  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-x-hidden font-sans">
      
      {/* Theme Switcher Sidebar */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => setCurrentTheme(t)}
            className={`w-14 h-14 rounded-2xl border-2 transition-all flex items-center justify-center overflow-hidden hover:scale-110 shadow-2xl group relative backdrop-blur-md`}
            style={{ 
              borderColor: currentTheme.id === t.id ? t.theme : 'rgba(255,255,255,0.1)',
              backgroundColor: currentTheme.id === t.id ? t.theme + '44' : 'rgba(255,255,255,0.02)'
            }}
          >
             <t.Icon 
               size={24} 
               className="transition-all duration-500 group-hover:rotate-12" 
               style={{ color: currentTheme.id === t.id ? '#FFF' : t.theme }} 
             />
             <motion.div 
               layoutId="activeTheme"
               className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
             />
             <span className="absolute right-full mr-4 bg-black/90 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-2xl">
               {t.name} Protocol
             </span>
          </button>
        ))}
      </nav>

      {/* Immersive 3D Background */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentTheme.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 -z-20"
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color={currentTheme.core} />
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Sphere args={[20, 64, 64]} scale={[-1, 1, 1]}>
                <meshBasicMaterial color={currentTheme.theme} wireframe opacity={0.03} transparent />
              </Sphere>
            </Float>
          </Canvas>
        </motion.div>
      </AnimatePresence>

      {/* Header Panel */}
      <header 
        className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5 transition-colors duration-1000"
        style={{ 
          background: `linear-gradient(to bottom, ${currentTheme.theme}22, #060606)`
        }}
      >
        <div className="absolute inset-0 z-0 opacity-60">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
            <EnergyCore color={currentTheme.theme} coreColor={currentTheme.core} />
            <Environment preset="night" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div 
            key={currentTheme.id + "_title"}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="inline-block bg-white px-10 py-6 -skew-x-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-black mb-6 uppercase"
          >
            <span className="font-comic text-7xl md:text-[90px] leading-[0.8] tracking-tighter transition-colors duration-1000" style={{ color: currentTheme.theme }}>
              {HERO_DATA.name}
            </span>
          </motion.div>
          <div className="flex flex-col items-center gap-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-3xl font-black uppercase tracking-[0.5em] text-gray-500"
            >
              {HERO_DATA.alias}
            </motion.h2>
            <motion.div 
              animate={{ backgroundColor: currentTheme.theme }}
              className="w-32 h-1 animate-pulse transition-colors duration-1000"
            />
          </div>
        </div>

        {/* Identity Status HUD */}
        <div className="absolute bottom-10 left-10 text-[10px] font-mono opacity-40 space-y-2 hidden lg:block">
          <div className="flex items-center gap-2">
            <Shield size={12} style={{ color: currentTheme.theme }} className="transition-colors duration-1000" />
            <span>IDENTITY.VERIFIED: {HERO_DATA.identity}</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-1000" style={{ color: currentTheme.core }}>
            <Crosshair size={12} />
            <span>SYSTEM.LOCK: {currentTheme.id.toUpperCase()}_MOD_V3</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Section: Dossier and Grid */}
        <section className="lg:col-span-4 space-y-12">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-12 rounded-3xl shadow-2xl relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Cpu size={100} style={{ color: currentTheme.theme }} className="transition-colors duration-1000" />
            </div>
            
            <h3 className="font-comic text-3xl uppercase mb-10 flex items-center gap-4 transition-colors duration-1000" style={{ color: currentTheme.theme }}>
              Dossier Record
            </h3>

            <div className="space-y-8">
              {[
                { label: "Identity", value: HERO_DATA.identity },
                { label: "Strategic Base", value: HERO_DATA.base },
                { label: "Status", value: "Available for Hire", highlight: true }
              ].map((field, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">{field.label}</p>
                  <p className={`text-sm font-bold uppercase transition-colors duration-1000 ${field.highlight ? "" : "text-gray-300"}`} style={{ color: field.highlight ? currentTheme.theme : undefined }}>
                    {field.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-sm leading-relaxed text-gray-400 font-medium italic border-l-2 pl-6 transition-colors duration-1000" style={{ borderColor: currentTheme.theme }}>
              "{HERO_DATA.summary}"
            </p>

            <div className="mt-12 grid grid-cols-4 gap-4">
              <a href={`mailto:${HERO_DATA.contact.email}`} className="aspect-square flex items-center justify-center bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all rounded-xl border border-white/5">
                <Mail size={18} />
              </a>
              <a href={HERO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="aspect-square flex items-center justify-center bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all rounded-xl border border-white/5">
                <Linkedin size={18} />
              </a>
              <a href="#" className="aspect-square flex items-center justify-center bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all rounded-xl border border-white/5">
                <Globe size={18} />
              </a>
              <a href={HERO_DATA.contact.github} className="aspect-square flex items-center justify-center bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all rounded-xl border border-white/5">
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          {/* Power Grid */}
          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-12 rounded-3xl shadow-2xl">
            <h3 className="font-comic text-3xl uppercase mb-12 flex items-center gap-4 transition-colors duration-1000" style={{ color: currentTheme.core }}>
              <Zap className="fill-current" /> Combat Matrix
            </h3>
            <div className="space-y-10">
              {HERO_DATA.powers.map((power, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{power.name}</span>
                    <span className="font-mono text-xs transition-colors duration-1000" style={{ color: currentTheme.core }}>{power.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full relative overflow-hidden">
                    <motion.div 
                      key={currentTheme.id + "_power_" + i}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${power.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full relative shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors duration-1000"
                      style={{ backgroundColor: currentTheme.theme }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Arsenal (Tools) */}
          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-12 rounded-3xl shadow-2xl">
            <h3 className="font-comic text-3xl uppercase mb-12 flex items-center gap-4 transition-colors duration-1000" style={{ color: currentTheme.theme }}>
              <Cpu className="fill-current" /> Arsenal Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {HERO_DATA.tools.map((tool, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-white transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Right Section: Missions and Academy */}
        <section className="lg:col-span-8 space-y-24">
          
          {/* Security Clearances (Certifications) */}
          <div className="space-y-16">
            <div className="flex items-center gap-6">
              <h3 className="font-comic text-6xl uppercase tracking-tighter">Security Clearances</h3>
              <div className="flex-1 h-[2px] opacity-20 transition-all duration-1000" style={{ background: `linear-gradient(to right, ${currentTheme.theme}, transparent)` }}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {HERO_DATA.commendations.map((cert, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                  <Shield size={24} style={{ color: currentTheme.theme }} className="shrink-0 group-hover:scale-110 transition-transform duration-1000" />
                  <span className="text-[10px] font-black uppercase tracking-widest leading-tight text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <div className="flex items-center gap-6">
              <h3 className="font-comic text-6xl uppercase tracking-tighter">Operational History</h3>
              <div className="flex-1 h-[2px] opacity-20 transition-all duration-1000" style={{ background: `linear-gradient(to right, ${currentTheme.theme}, transparent)` }}></div>
            </div>

            <div className="space-y-16">
              {HERO_DATA.missions.map((mission, i) => (
                <motion.div 
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div 
                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-10 shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-1000" 
                    style={{ backgroundColor: currentTheme.theme }}
                  />
                  <div className="relative bg-[#0d0d0d] border border-white/10 p-12 rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                      <div>
                        <h4 className="text-4xl font-black uppercase tracking-tight text-white mb-2">{mission.role}</h4>
                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] transition-colors duration-1000" style={{ color: currentTheme.theme }}>
                          <Target size={16} /> {mission.company}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-gray-500 border border-white/10 px-6 py-2 rounded-full uppercase tracking-widest">
                        {mission.period}
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {mission.description}
                    </p>

                    {/* Sub-Projects for Thakral */}
                    {mission.projects && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {mission.projects.map((proj, idx) => (
                          <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <h5 className="text-sm font-black uppercase tracking-widest text-white mb-2 transition-colors duration-1000" style={{ color: currentTheme.core }}>{proj.title}</h5>
                            <p className="text-[10px] leading-relaxed text-gray-400 uppercase tracking-wide">{proj.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mission.achievements.map((ach, j) => (
                        <div key={j} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-white/20 transition-all">
                          <Star className="shrink-0 mt-0.5 transition-colors duration-1000" size={14} style={{ color: currentTheme.theme }} />
                          <span className="text-[11px] font-bold uppercase tracking-wide text-gray-300">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Records */}
          <div className="space-y-16">
             <div className="flex items-center justify-end gap-6 text-right">
              <div className="flex-1 h-[2px] opacity-20 transition-all duration-1000" style={{ background: `linear-gradient(to left, ${currentTheme.theme}, transparent)` }}></div>
              <h3 className="font-comic text-6xl uppercase tracking-tighter">Academic Origin</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {HERO_DATA.academy.map((edu, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all shadow-xl group"
                >
                  <Trophy className="mb-6 transition-transform group-hover:scale-125 duration-1000" size={32} style={{ color: currentTheme.theme }} />
                  <h4 className="text-2xl font-black uppercase mb-3 text-white leading-tight">{edu.school}</h4>
                  <p className="text-sm font-bold opacity-60 mb-6 uppercase tracking-widest">{edu.degree}</p>
                  <div className="h-px w-16 mb-6 transition-all group-hover:w-full opacity-20 duration-1000" style={{ backgroundColor: currentTheme.theme }}></div>
                  <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{edu.year}</p>
                </motion.div>
              ))}
              <div className="flex flex-col items-center justify-center p-10 rounded-3xl border-2 border-dashed border-white/10 opacity-30 hover:opacity-100 transition-opacity cursor-help group">
                 <Rocket size={40} className="mb-4 text-gray-500 group-hover:text-white transition-colors" />
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-center">Protocol Always Active<br/>Next Level Incoming</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Action Footer */}
      <footer className="relative py-40 border-t border-white/5 bg-gradient-to-t from-black to-transparent overflow-hidden text-center transition-all duration-1000" style={{ borderColor: currentTheme.theme + '22' }}>
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
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <a 
            href={`mailto:${HERO_DATA.contact.email}`}
            className="relative group bg-white text-black px-24 py-10 rounded-full font-black uppercase tracking-[0.6em] text-2xl transition-all hover:tracking-[0.8em] cursor-pointer active:scale-95 shadow-[0_20px_80px_rgba(255,255,255,0.1)] block"
          >
            Initiate Contact
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10 transition-all duration-1000"
              style={{ backgroundColor: currentTheme.theme }}
            />
          </a>
          
          <p className="mt-12 font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
            System Protocol Active &mdash; {currentTheme.id.toUpperCase()}_LINK_STABLE
          </p>
        </motion.div>
      </footer>
    </div>
  );
}



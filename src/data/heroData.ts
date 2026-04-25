import { 
  Cpu, 
  CloudLightning, 
  Cat, 
  Bug, 
  Shield, 
  Activity, 
  Eye,
  LucideIcon
} from "lucide-react";

export interface HeroData {
  id: string;
  name: string;
  alias: string;
  identity: string;
  base: string;
  summary: string;
  powers: { name: string; level: number }[];
  tools: string[];
  commendations: string[];
  missions: {
    company: string;
    role: string;
    period: string;
    description: string;
    projects?: { title: string; desc: string }[];
    achievements: string[];
  }[];
  academy: {
    school: string;
    degree: string;
    year: string;
  }[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export interface Theme {
  id: string;
  name: string;
  theme: string;
  core: string;
  Icon: LucideIcon;
}

export const HERO_DATA: HeroData = {
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

export const THEMES: Theme[] = [
  { id: 'ironman', name: 'Iron Man', theme: '#ED1D24', core: '#48a9fe', Icon: Cpu },
  { id: 'thor', name: 'Thor', theme: '#00D2FF', core: '#FFD700', Icon: CloudLightning },
  { id: 'panther', name: 'Black Panther', theme: '#A330FF', core: '#FFFFFF', Icon: Cat },
  { id: 'spiderman', name: 'Spider-Man', theme: '#E23636', core: '#5091CD', Icon: Bug },
  { id: 'cap', name: 'Capt. America', theme: '#0047AB', core: '#FFFFFF', Icon: Shield },
  { id: 'hulk', name: 'Hulk', theme: '#4B9B32', core: '#8A2BE2', Icon: Activity },
  { id: 'strange', name: 'Dr. Strange', theme: '#FF4500', core: '#008080', Icon: Eye }
];

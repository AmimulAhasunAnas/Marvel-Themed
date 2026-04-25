import { motion } from "motion/react";
import { Mail, Linkedin, Globe, Github, Cpu } from "lucide-react";
import { HeroData, Theme } from "../data/heroData";

interface DossierCardProps {
  data: HeroData;
  theme: Theme;
}

export const DossierCard = ({ data, theme }: DossierCardProps) => {
  return (
    <motion.div 
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-12 rounded-3xl shadow-2xl relative group overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Cpu size={100} style={{ color: theme.theme }} className="transition-colors duration-1000" />
      </div>
      
      <h3 className="font-comic text-3xl uppercase mb-10 flex items-center gap-4 transition-colors duration-1000" style={{ color: theme.theme }}>
        Dossier Record
      </h3>

      <div className="space-y-8 relative z-10">
        {[
          { label: "Identity", value: data.identity },
          { label: "Strategic Base", value: data.base },
          { label: "Status", value: "Available for Hire", highlight: true }
        ].map((field, i) => (
          <div key={i} className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">{field.label}</p>
            <p className={`text-sm font-bold uppercase transition-colors duration-1000 ${field.highlight ? "" : "text-gray-300"}`} style={{ color: field.highlight ? theme.theme : undefined }}>
              {field.value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm leading-relaxed text-gray-400 font-medium italic border-l-2 pl-6 transition-colors duration-1000" style={{ borderColor: theme.theme }}>
        "{data.summary}"
      </p>

      <div className="mt-12 grid grid-cols-4 gap-4 relative z-10">
        <ContactButton href={`mailto:${data.contact.email}`} icon={<Mail size={18} />} />
        <ContactButton href={data.contact.linkedin} icon={<Linkedin size={18} />} isExternal />
        <ContactButton href="#" icon={<Globe size={18} />} />
        <ContactButton href={data.contact.github} icon={<Github size={18} />} />
      </div>
    </motion.div>
  );
};

const ContactButton = ({ href, icon, isExternal }: { href: string; icon: React.ReactNode; isExternal?: boolean }) => (
  <a 
    href={href} 
    target={isExternal ? "_blank" : undefined} 
    rel={isExternal ? "noreferrer" : undefined}
    className="aspect-square flex items-center justify-center bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all rounded-xl border border-white/5 shadow-lg active:scale-90"
  >
    {icon}
  </a>
);

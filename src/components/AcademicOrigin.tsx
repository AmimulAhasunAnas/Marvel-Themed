import { motion } from "motion/react";
import { Trophy, Rocket } from "lucide-react";
import { HeroData, Theme } from "../data/heroData";

interface AcademicOriginProps {
  academy: HeroData["academy"];
  theme: Theme;
}

export const AcademicOrigin = ({ academy, theme }: AcademicOriginProps) => {
  return (
    <div className="space-y-16">
      <div className="flex items-center justify-center md:justify-end gap-6 text-center md:text-right">
        <div className="hidden md:block flex-1 h-[2px] opacity-20 transition-all duration-1000" style={{ background: `linear-gradient(to left, ${theme.theme}, transparent)` }}></div>
        <h3 className="font-comic text-4xl md:text-6xl uppercase tracking-tighter">Academic Origin</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {academy.map((edu, i) => (
          <motion.div 
            key={edu.school}
            whileHover={{ y: -5 }}
            className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all shadow-xl group"
          >
            <Trophy className="mb-6 transition-transform group-hover:scale-125 duration-1000" size={32} style={{ color: theme.theme }} />
            <h4 className="text-2xl font-black uppercase mb-3 text-white leading-tight">{edu.school}</h4>
            <p className="text-sm font-bold opacity-60 mb-6 uppercase tracking-widest">{edu.degree}</p>
            <div className="h-px w-16 mb-6 transition-all group-hover:w-full opacity-20 duration-1000" style={{ backgroundColor: theme.theme }}></div>
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{edu.year}</p>
          </motion.div>
        ))}
        <div className="flex flex-col items-center justify-center p-10 rounded-3xl border-2 border-dashed border-white/10 opacity-30 hover:opacity-100 transition-opacity cursor-help group">
           <Rocket size={40} className="mb-4 text-gray-500 group-hover:text-white transition-colors" />
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-center">Protocol Always Active<br/>Next Level Incoming</p>
        </div>
      </div>
    </div>
  );
};

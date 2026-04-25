import { motion } from "motion/react";
import { Target, Star } from "lucide-react";
import { HeroData, Theme } from "../data/heroData";

interface MissionHistoryProps {
  missions: HeroData["missions"];
  theme: Theme;
}

export const MissionHistory = ({ missions, theme }: MissionHistoryProps) => {
  return (
    <div className="space-y-16">
      <div className="flex items-center gap-6">
        <h3 className="font-comic text-4xl md:text-6xl uppercase tracking-tighter">Operational History</h3>
        <div className="flex-1 h-[2px] opacity-20 transition-all duration-1000" style={{ background: `linear-gradient(to right, ${theme.theme}, transparent)` }}></div>
      </div>

      <div className="space-y-16">
        {missions.map((mission, i) => (
          <motion.div 
            key={mission.company + mission.role}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div 
              className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-10 shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-1000" 
              style={{ backgroundColor: theme.theme }}
            />
            <div className="relative bg-[#0d0d0d] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                <div>
                  <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-2">{mission.role}</h4>
                  <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] transition-colors duration-1000" style={{ color: theme.theme }}>
                    <Target size={16} /> {mission.company}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-gray-500 border border-white/10 px-6 py-2 rounded-full uppercase tracking-widest self-start md:self-center">
                  {mission.period}
                </div>
              </div>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                {mission.description}
              </p>

              {mission.projects && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {mission.projects.map((proj, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                      <h5 className="text-sm font-black uppercase tracking-widest text-white mb-2 transition-colors duration-1000" style={{ color: theme.core }}>{proj.title}</h5>
                      <p className="text-[10px] leading-relaxed text-gray-400 uppercase tracking-wide">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {mission.achievements.map((ach, j) => (
                  <div key={j} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-white/20 transition-all">
                    <Star className="shrink-0 mt-0.5 transition-colors duration-1000" size={14} style={{ color: theme.theme }} />
                    <span className="text-[11px] font-bold uppercase tracking-wide text-gray-300">{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

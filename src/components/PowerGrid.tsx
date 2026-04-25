import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { Theme } from "../data/heroData";

interface PowerGridProps {
  powers: { name: string; level: number }[];
  theme: Theme;
}

export const PowerGrid = ({ powers, theme }: PowerGridProps) => {
  return (
    <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-12 rounded-3xl shadow-2xl">
      <h3 className="font-comic text-3xl uppercase mb-12 flex items-center gap-4 transition-colors duration-1000" style={{ color: theme.core }}>
        <Zap className="fill-current" /> Combat Matrix
      </h3>
      <div className="space-y-10">
        {powers.map((power, i) => (
          <div key={power.name} className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{power.name}</span>
              <span className="font-mono text-xs transition-colors duration-1000" style={{ color: theme.core }}>{power.level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full relative overflow-hidden">
              <motion.div 
                key={theme.id + "_" + power.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${power.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-full relative shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors duration-1000"
                style={{ backgroundColor: theme.theme }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

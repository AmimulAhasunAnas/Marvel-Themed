import { Shield } from "lucide-react";
import { Theme } from "../data/heroData";

interface CertificationGridProps {
  commendations: string[];
  theme: Theme;
}

export const CertificationGrid = ({ commendations, theme }: CertificationGridProps) => {
  return (
    <div className="space-y-16">
      <div className="flex items-center gap-6">
        <h3 className="font-comic text-4xl md:text-6xl uppercase tracking-tighter">Security Clearances</h3>
        <div className="flex-1 h-[2px] opacity-20 transition-all duration-1000" style={{ background: `linear-gradient(to right, ${theme.theme}, transparent)` }}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {commendations.map((cert, i) => (
          <div key={cert} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
            <Shield size={24} style={{ color: theme.theme }} className="shrink-0 group-hover:scale-110 transition-transform duration-1000" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-tight text-gray-300">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

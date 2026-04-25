import { motion } from "motion/react";
import { Theme } from "../data/heroData";

interface SidebarProps {
  themes: Theme[];
  currentTheme: Theme;
  onThemeSelect: (theme: Theme) => void;
}

export const Sidebar = ({ themes, currentTheme, onThemeSelect }: SidebarProps) => {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => onThemeSelect(t)}
          aria-label={`Switch to ${t.name} theme`}
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
           {currentTheme.id === t.id && (
             <motion.div 
               layoutId="activeTheme"
               className="absolute inset-0 bg-white/5"
             />
           )}
           <span className="absolute right-full mr-4 bg-black/90 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-2xl pointer-events-none">
             {t.name} Protocol
           </span>
        </button>
      ))}
    </nav>
  );
};

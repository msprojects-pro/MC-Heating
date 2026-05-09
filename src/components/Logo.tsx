import { motion } from 'motion/react';
import { Flame } from 'lucide-react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <motion.div
        animate={{ 
          filter: [
            "drop-shadow(0 0 2px rgba(255, 77, 0, 0.4))",
            "drop-shadow(0 0 8px rgba(255, 77, 0, 0.6))",
            "drop-shadow(0 0 2px rgba(255, 77, 0, 0.4))",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Flame className="w-8 h-8 text-primary fill-primary" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10"
        />
      </motion.div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-display font-extrabold tracking-tighter text-white">MC</span>
          <span className="text-[10px] font-display font-bold tracking-[0.05em] text-primary uppercase">HEATING & PLUMBING</span>
        </div>
      )}
    </div>
  );
}

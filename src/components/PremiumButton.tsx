import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function PremiumButton({ 
  children, 
  className, 
  onClick, 
  href, 
  variant = 'primary',
  type = 'button',
  disabled = false
}: PremiumButtonProps) {
  const baseClasses = "relative px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-primary text-dark shadow-[0_0_15px_rgba(255,77,0,0.3)]",
    secondary: "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/15",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark"
  };

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href, onClick } : { onClick, type, disabled };

  return (
    <Component
      {...componentProps}
      whileHover={{ 
        y: -4, 
        scale: 1.02,
        boxShadow: variant === 'primary' ? "0 10px 30px rgba(255, 77, 0, 0.5)" : "0 10px 20px rgba(255, 255, 255, 0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        boxShadow: variant === 'primary' ? [
          "0 0 10px rgba(255, 77, 0, 0.3)",
          "0 0 25px rgba(255, 77, 0, 0.6)",
          "0 0 10px rgba(255, 77, 0, 0.3)"
        ] : undefined
      }}
      transition={{ 
        opacity: { duration: 0.4 },
        y: { duration: 0.4 },
        boxShadow: { 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
      className={cn(baseClasses, variants[variant], className)}
    >
      {/* Moving Shine Effect on Hover */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        }}
      />

      {/* Internal Glow for Primary */}
      {variant === 'primary' && (
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-primary-light/20 blur-xl pointer-events-none"
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}

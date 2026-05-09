import { motion } from 'motion/react';
import { Phone, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { PremiumButton } from './PremiumButton';

export function EmergencyBanner() {
  return null;
}

export function FloatingMobileCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 right-6 z-[60] md:hidden"
    >
      <PremiumButton 
        href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
        className="w-full h-16 rounded-2xl flex items-center justify-between px-6 shadow-[0_15px_40px_rgba(255,77,0,0.5)] border-none"
      >
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-black uppercase tracking-widest text-dark/60 mb-1">Call Now</span>
          <span className="text-xl font-black text-dark">{BUSINESS_INFO.phone}</span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-white/30 flex items-center justify-center">
          <Phone className="w-5 h-5 text-dark fill-dark" />
        </div>
      </PremiumButton>
    </motion.div>
  );
}

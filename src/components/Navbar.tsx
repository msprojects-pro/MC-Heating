import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, BUSINESS_INFO } from '../constants';
import { cn } from '../lib/utils';

import { PremiumButton } from './PremiumButton';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        isScrolled ? "glass py-2" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <Logo />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors hover:glow-text"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 group"
          >
            <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold">{BUSINESS_INFO.phone}</span>
          </a>
          <PremiumButton 
            href="#contact"
            className="px-6 py-2.5 text-sm"
          >
            Book Now
          </PremiumButton>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.a 
            whileTap={{ scale: 0.95 }}
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-dark shadow-[0_0_15px_rgba(255,77,0,0.4)]"
          >
            <Phone className="w-4 h-4 fill-dark" />
            <span className="text-[10px] font-black uppercase tracking-tighter">Call Now</span>
          </motion.a>
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-white/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-lg font-bold">{BUSINESS_INFO.phone}</span>
                </a>
                <PremiumButton 
                  href="#contact"
                  className="py-4 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Free Quote
                </PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

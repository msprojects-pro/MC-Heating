import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, ChevronRight, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { PremiumButton } from './PremiumButton';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-dark">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" 
            alt="Professional heating and plumbing work" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        {/* Professional Overlay - Dark on the left, fading to clearer on the right */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: 'linear-gradient(to right, #0a0a0a 20%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0.4) 100%)' }} 
        />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-light/5 blur-[120px] rounded-full z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full w-fit mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Gas Safe Registered Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-extrabold leading-[1] mb-6"
          >
            Expert <span className="text-gradient hover:glow-text transition-all duration-500 italic px-2 pb-1">Heating</span> & <br />
            Plumbing Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl"
          >
            With <span className="text-white font-bold">{BUSINESS_INFO.experience} experience</span>, owner Mitch (Ex-British Gas) provides premium heating solutions in Birmingham and surrounding areas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <PremiumButton 
              href="#contact"
              className="px-10 py-5 text-xl shadow-[0_0_30px_rgba(255,77,0,0.4)]"
            >
              Get a Free Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
            
            <PremiumButton 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              variant="secondary"
              className="px-10 py-5 text-xl"
            >
              <Phone className="w-5 h-5 text-primary" />
              {BUSINESS_INFO.phone}
            </PremiumButton>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-base font-bold text-white leading-none">31 Years</p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-base font-bold text-white leading-none">98% Success</p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Recommend Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

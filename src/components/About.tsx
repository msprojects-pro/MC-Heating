import { motion } from 'motion/react';
import { Award, Zap, History, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glow-border">
              <img 
                src="https://res.cloudinary.com/dn5dfwdzd/image/upload/w_800,q_80,f_auto/v1778696354/20260513_231409_0000_gdweg5.png" 
                alt="Mitch - MC Heating Plumbing Owner" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
            </div>
            
            {/* Experience Floating Card */}
            <motion.div
              initial={{ scale: 0, y: 50 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl glow-border"
            >
              <div className="text-4xl font-display font-extrabold text-primary mb-1">31+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-white/70">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">About MC Heating & Plumbing</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              A Legacy of <span className="text-gradient">Quality</span> & Trust
            </h3>
            
            <div className="space-y-6 text-white/70 leading-relaxed max-w-xl">
              <p>
                Established in 2020 by owner <span className="text-white font-bold">Mitch</span>, MC Heating & Plumbing was built on a foundation of over three decades of engineering excellence.
              </p>
              <p>
                As an <span className="text-white font-bold italic">Ex-British Gas Engineer</span> with 31 years of experience, Mitch brings a level of technical expertise and safety standard that is second to none in the industry.
              </p>
              <p>
                Based in <span className="text-white font-bold">Bartley Green</span>, we proudly serve the Birmingham area, offering everything from minor plumbing repairs to complex boiler installations and emergency breakdowns.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Ex-British Gas</h4>
                  <p className="text-sm text-white/50">Trained to the industry's highest safety standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Local Focus</h4>
                  <p className="text-sm text-white/50">Serving Birmingham & Bartley Green since 2020.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

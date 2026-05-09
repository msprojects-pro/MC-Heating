import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

export function Services() {
  return (
    <section id="services" className="py-24 bg-dark-gray/30 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Premium Solutions For <br />
              Your <span className="text-gradient">Home & Comfort</span>
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-md text-white/50 text-lg"
          >
            From emergency repairs to full system installations, we provide high-end engineering with unmatched attention to detail.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-dark-gray border border-white/5 transition-all duration-500 group-hover:border-primary/50 group-hover:glow-border h-full">
                  {/* Service Image Header */}
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent" />
                  </div>

                  <div className="p-8 pt-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <a 
                      href="#contact"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors cursor-pointer"
                    >
                      Learn More
                      <LucideIcons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </a>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent -translate-y-full translate-x-full transition-transform duration-500 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../constants';

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/2 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h3>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-white/50 font-bold uppercase tracking-widest text-xs">
            {BUSINESS_INFO.stats.recommendationRate} Recommendation Rate From Our Customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl border-white/5 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-lg text-white/80 italic leading-relaxed mb-8">
                "{review.comment}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-lg">{review.name}</p>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mt-1">Verified Customer</p>
                </div>
                <p className="text-xs text-white/20 font-bold">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={BUSINESS_INFO.facebook} 
            target="_blank" 
            rel="noreferrer"
            className="text-sm font-bold text-white/50 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            Read our reviews on Facebook
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Star className="w-4 h-4 fill-primary text-primary" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}

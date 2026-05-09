import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../constants';
import { cn } from '../lib/utils';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % GALLERY.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + GALLERY.length) % GALLERY.length);
    }
  };

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
          >
            Showcase
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Our Latest <span className="text-gradient">Projects</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <Maximize2 className="w-10 h-10 text-primary mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <p className="text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 uppercase tracking-wider">View Work</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-dark/95 backdrop-blur-xl"
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10 p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 p-2"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 p-2"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
              <motion.img
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={GALLERY[selectedImage].url}
                alt={GALLERY[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl glow-border"
              />
              <div className="mt-8 text-center text-white">
                <h4 className="text-2xl font-display font-bold mb-2">{GALLERY[selectedImage].title}</h4>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">{GALLERY[selectedImage].category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

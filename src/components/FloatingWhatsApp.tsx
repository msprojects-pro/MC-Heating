import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "447764740103";

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white text-dark px-4 py-2 rounded-xl text-sm font-bold shadow-2xl pointer-events-none mb-1 border border-primary/10"
          >
            Chat with us
            {/* Tooltip Arrow */}
            <div className="absolute top-full right-6 w-2 h-2 bg-white rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Pulse Ring Animation */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1.4, 1],
            opacity: [0.5, 0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-2 bg-primary rounded-full blur-sm"
        />

        <motion.a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-[0_0_20px_rgba(255,77,0,0.4)] hover:shadow-[0_0_30px_rgba(255,77,0,0.6)] transition-shadow duration-300 group"
          id="whatsapp-button"
        >
          {/* Official WhatsApp SVG Icon with precise path */}
          <svg 
            viewBox="0 0 448 512" 
            className="w-8 h-8 fill-white group-hover:scale-110 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.9 69.4 27.3 107.1 27.3h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-68.1-157.3zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}


import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';

interface HeroProps {
  onOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpen }) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 [perspective:1200px]">
      {/* Enhanced 3D Decorative Element */}
      <motion.div 
        className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full blur-[120px] bg-pink-500/10 -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [-20, 20, -20],
          y: [-30, 30, -30],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="text-center z-10 [transform-style:preserve-3d]">
        <motion.p
          initial={{ opacity: 0, y: 20, translateZ: 0 }}
          animate={{ opacity: 1, y: 0, translateZ: 50 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-pink-400 font-medium tracking-[0.4em] uppercase mb-4 text-sm md:text-base drop-shadow-lg"
        >
          Happy Birthday • 07 Jan 2026
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotateX: 0,
            y: [0, -15, 0],
            rotateY: [-5, 5, -5]
          }}
          transition={{ 
            delay: 0.8, 
            type: 'spring',
            rotateX: { duration: 1.5 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative inline-block"
        >
          <h1 className="text-8xl md:text-[12rem] font-serif text-white mb-6 drop-shadow-[0_20px_50px_rgba(236,72,153,0.3)] cursor-default select-none">
            Ayushi
          </h1>
          {/* Subtle text reflection/glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent blur-2xl -z-10 opacity-50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, translateZ: -50 }}
          animate={{ 
            opacity: 1, 
            translateZ: 30,
            y: [0, 5, 0] 
          }}
          transition={{ 
            delay: 1.2,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 italic font-light tracking-wide"
        >
          Celebrating the beauty, simplicity, and cuteness of a soul so rare.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0, translateZ: -100 }}
          animate={{ opacity: 1, scale: 1, translateZ: 0 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={onOpen}
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 shadow-[0_0_30px_rgba(236,72,153,0.4)]"
          >
            <span className="relative px-10 py-5 transition-all ease-in duration-75 bg-slate-900 rounded-full group-hover:bg-opacity-0 flex items-center gap-3 text-2xl font-semibold">
              <Gift className="w-7 h-7 animate-bounce text-pink-400 group-hover:text-white" />
              Open Your Gift
            </span>
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4] 
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-pink-500/60">Explore</span>
          <div className="w-[1.5px] h-16 bg-gradient-to-b from-pink-500 via-purple-500/50 to-transparent rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
        </div>
      </motion.div>

      {/* Additional 3D floating background shapes */}
      <motion.div 
        className="absolute top-1/4 left-10 w-2 h-2 bg-pink-400 rounded-full"
        animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0, 0.8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-20 w-3 h-3 bg-purple-400 rounded-full"
        animate={{ y: [0, 50, 0], x: [0, -30, 0], opacity: [0, 0.6, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;

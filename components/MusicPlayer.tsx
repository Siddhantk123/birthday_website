
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-8 right-8 z-[90]"
    >
      <div className="relative group">
        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative p-4 rounded-full glass border-2 flex items-center justify-center shadow-2xl transition-colors ${
            isPlaying ? 'text-pink-400 border-pink-500/50' : 'text-slate-500 border-slate-700'
          }`}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="on"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Volume2 className="w-6 h-6 z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="off"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <VolumeX className="w-6 h-6 z-10" />
              </motion.div>
            )}
          </AnimatePresence>

          {isPlaying && (
            <motion.div 
              className="absolute inset-0 rounded-full bg-pink-500/20"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>
        
        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl border border-white/10">
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </div>
      </div>
      
      {/* Decorative Musical Notes */}
      {isPlaying && (
        <div className="pointer-events-none">
          <motion.div 
            className="absolute -top-4 -left-2 text-pink-400"
            animate={{ y: [-10, -30], x: [0, -10], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
          >
            <Music size={12} />
          </motion.div>
          <motion.div 
            className="absolute -top-6 right-0 text-purple-400"
            animate={{ y: [-10, -40], x: [0, 10], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <Music size={14} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default MusicPlayer;

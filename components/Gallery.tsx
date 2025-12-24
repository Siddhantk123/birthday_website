
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AYUSHI_PHOTOS } from '../constants';
import { Photo } from '../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Simple', 'Beautiful', 'Cute', 'Memories'];

  const filteredPhotos = filter === 'All' 
    ? AYUSHI_PHOTOS 
    : AYUSHI_PHOTOS.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Capturing Moments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400"
          >
            A journey through some of your most beautiful shades.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all border ${
                filter === cat 
                ? 'bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/20' 
                : 'border-slate-700 text-slate-400 hover:border-pink-500/50 hover:text-pink-400'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 [perspective:1000px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ 
                  y: -12, 
                  rotateX: 4, 
                  rotateY: 4,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass cursor-pointer shadow-xl hover:shadow-pink-500/10 transition-shadow duration-500"
              >
                {/* Image Zoom Container */}
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={photo.url} 
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125 group-hover:rotate-1"
                  />
                </div>

                {/* Parallax Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-pink-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {photo.category}
                  </span>
                  <h3 className="text-white font-serif font-semibold text-xl leading-tight transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {photo.caption}
                  </h3>
                  
                  {/* Subtle decorative line for parallax feel */}
                  <div className="w-0 group-hover:w-12 h-[2px] bg-pink-500 mt-4 transition-all duration-700 delay-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

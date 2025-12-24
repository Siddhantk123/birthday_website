
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Smile, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const traits = [
    {
      title: "Simplicity",
      desc: "In a world of chaos, your simple heart brings the most peace. It's your greatest strength.",
      icon: <Smile className="text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Beauty",
      desc: "Not just what we see, but the grace you carry within. You radiate a light that warms everyone around.",
      icon: <Heart className="text-pink-400" />,
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Cuteness",
      desc: "That contagious smile and your little quirks - they make the world a lot brighter than it has any right to be.",
      icon: <Sparkles className="text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">What Makes You Special</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {traits.map((trait, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.2,
                ease: "easeOut" 
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${trait.color} backdrop-blur-sm shadow-2xl shadow-black/20`}
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900/50 flex items-center justify-center mb-6 shadow-xl">
                {trait.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{trait.title}</h3>
              <p className="text-slate-400 leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

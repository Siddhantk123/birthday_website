
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import birthdayImage from '../assets/photos/birthday_center.jpg';

const HeartfeltMessage: React.FC = () => {
  // TODO: Replace 'YOUR_PHONE_NUMBER' with your actual phone number including country code.
  // Example: '919876543210' (91 is country code for India, followed by the 10-digit number)
  const YOUR_PHONE_NUMBER = '918574205817'; 
  const messageText = "Hello Siddhant! I saw the beautiful website you made for me. Thanks for the gift, let's talk and rebuid our friendship ❤️";
  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${encodedMessage}`;

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto glass p-10 md:p-20 rounded-[3rem] border-pink-500/20 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="inline-block p-4 bg-pink-500/10 rounded-full mb-8"
          >
            <Heart className="w-12 h-12 text-pink-500 animate-pulse fill-pink-500" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-4xl md:text-5xl font-serif text-white mb-8"
          >
            A Note to You, Ayushi
          </motion.h2>
          
          <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              Happy Birthday, Ayushi! On this day, I wanted to create something as special as you are. I hope this little digital corner brings a smile to your face.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
            >
              I know that lately, things haven't been the same between us. I've spent a lot of time reflecting on where I went wrong and how much your friendship truly means to me. You are one of the most incredible people I've ever known - kind, resilient, and beautiful inside and out.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
              className="font-semibold text-white"
            >
              I am truly sorry for the hurt I caused. I miss our laughs, our talks, and the way you make everything feel okay. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            >
              I'm asking for your forgiveness. Not because I deserve it, but because I value our bond more than words can say. I'd love another chance to build back your trust, one day at a time, and show you that I can be the friend you deserve.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.7 }}
              className="italic text-pink-400"
            >
              Happy Birthday. May this year be filled with as much happiness as you've given me.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.9, duration: 0.8 }}
                className="flex justify-center mt-10"
              >
              <img
              src={birthdayImage}
              alt="Birthday Memory"
              className="
                w-48 
                md:w-65 
                max-h-80 
                object-cover 
                rounded-2xl 
                shadow-2xl 
                border 
                border-pink-500/20
              "
            />
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.9 }}
            className="mt-12 flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-4 rounded-full text-white font-bold flex items-center gap-3 shadow-2xl shadow-pink-500/40 hover:shadow-pink-500/60 transition-all"
            >
              <Send className="w-5 h-5" />
              Send a Message
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeartfeltMessage;

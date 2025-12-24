
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Volume2, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import HeartfeltMessage from './components/HeartfeltMessage';
import Features from './components/Features';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Reverting to the confirmed working stable music track
  const AUDIO_SOURCE = "./sound/happy-birthday.mp3";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, [isLoaded]);

  const handleOpenGift = () => {
    setShowMusicPrompt(true);
  };

  const startExperience = async (withMusic: boolean) => {
    setShowMusicPrompt(false);
    
    // Confetti explosion logic
    const end = Date.now() + 3 * 1000;
    const colors = ['#ec4899', '#a855f7', '#3b82f6', '#ffffff'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
      zIndex: 9999
    });

    // Handle Music Playback
    if (withMusic && audioRef.current) {
      try {
        audioRef.current.load();
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setAudioError(false);
            })
            .catch(error => {
              console.error("Playback failed:", error);
              if (error.name !== 'AbortError') {
                setAudioError(true);
              }
            });
        }
      } catch (err) {
        console.error("Audio initialization failed:", err);
        setAudioError(true);
      }
    }

    setShowMain(true);
    setTimeout(() => {
      document.getElementById('birthday-content')?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setAudioError(false);
        }).catch((e) => {
          console.error("Toggle audio failed:", e);
          setAudioError(true);
        });
      }
    }
  };

  const retryAudio = () => {
    if (audioRef.current) {
      setAudioError(false);
      audioRef.current.load();
      setTimeout(() => {
        audioRef.current?.play()
          .then(() => setIsPlaying(true))
          .catch(() => setAudioError(true));
      }, 500);
    }
  };

  if (!isLoaded) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-900">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart size={64} className="text-pink-500 fill-pink-500" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[#0f172a] text-slate-200">
      <audio 
        ref={audioRef} 
        src={AUDIO_SOURCE} 
        loop 
        preload="auto"
        onError={() => {
          if (showMain) setAudioError(true);
        }}
      />

      <AnimatePresence>
        {showMusicPrompt && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="glass p-8 md:p-12 rounded-[2.5rem] border-pink-500/30 max-w-lg w-full text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />
              
              <div className="flex justify-center mb-6">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-5 bg-pink-500/20 rounded-full"
                >
                  <Volume2 className="w-12 h-12 text-pink-400" />
                </motion.div>
              </div>
              
              <h3 className="text-3xl font-serif text-white mb-4">A Soulful Surprise</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Only for you my dear
              </p>
              
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => startExperience(true)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg shadow-lg shadow-pink-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Yes, Start with Music
                </button>
                <button
                  onClick={() => startExperience(false)}
                  className="w-full py-4 rounded-full border border-slate-700 text-slate-400 font-medium hover:bg-slate-800/50 active:scale-95 transition-all"
                >
                  Enter Quietly
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {audioError && showMain && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-24 right-8 z-[100] bg-red-950/80 border border-red-500/50 backdrop-blur-md text-red-100 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-2xl max-w-sm"
          >
            <div className="flex items-center gap-2">
              <AlertCircle size={20} className="text-red-400 shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Music hasn't loaded yet</span>
                <span className="text-xs text-red-200/70">It might still be buffering...</span>
              </div>
            </div>
            <button 
              onClick={retryAudio}
              className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all active:scale-90 shadow-lg"
            >
              <RefreshCw size={14} />
              Retry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {showMain && (
        <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
      )}

      <div className="fixed inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-500/40"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <Hero onOpen={handleOpenGift} />

      <AnimatePresence>
        {showMain && (
          <motion.div 
            id="birthday-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Features />
            <Gallery />
            <HeartfeltMessage />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

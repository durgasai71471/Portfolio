import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashProps {
  onComplete: () => void;
}

export const Splash = ({ onComplete }: SplashProps) => {
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isSkipped) {
        onComplete();
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [isSkipped, onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isSkipped ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-6xl md:text-8xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white font-bold mb-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
      Durgasai Kota
      </motion.h1>
      <motion.div
        className="text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        MERN Stack Developer
      </motion.div>
      <motion.button
        onClick={handleSkip}
        className="absolute bottom-8 text-gray-400 hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Skip Animation
      </motion.button>
    </motion.div>
  );
};
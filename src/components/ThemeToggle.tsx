import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden border-2 transition-colors duration-500"
      style={{
        borderColor: theme === 'dark' ? 'rgba(0, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.3)',
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      disabled={isTransitioning}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Moon 
          className="w-6 h-6" 
          style={{ color: theme === 'dark' ? '#00ffff' : '#3b82f6' }}
        />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? -180 : 0,
          scale: theme === 'dark' ? 0 : 1,
          opacity: theme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun 
          className="w-6 h-6" 
          style={{ color: '#3b82f6' }}
        />
      </motion.div>
    </motion.button>
  );
};

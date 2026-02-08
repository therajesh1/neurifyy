import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ScrollToTop: React.FC = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full transition-all duration-500"
          style={{
            background:
              theme === 'dark'
                ? 'linear-gradient(135deg, #00ffff, #a855f7)'
                : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            boxShadow:
              theme === 'dark'
                ? '0 0 30px rgba(0, 255, 255, 0.3)'
                : '0 4px 20px rgba(59, 130, 246, 0.3)',
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0 }}
          whileHover={{
            scale: 1.1,
            boxShadow:
              theme === 'dark'
                ? '0 0 40px rgba(0, 255, 255, 0.5)'
                : '0 6px 30px rgba(59, 130, 246, 0.4)',
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

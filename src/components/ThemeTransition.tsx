import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeTransition: React.FC = () => {
  const { isTransitioning, theme } = useTheme();
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShowFlash(true);
      const timer = setTimeout(() => {
        setShowFlash(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <AnimatePresence>
      {showFlash && (
        <>
          {/* Flash Effect */}
          <motion.div
            className="fixed inset-0 z-[9999] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background:
                theme === 'dark'
                  ? 'radial-gradient(circle, rgba(0,255,255,0.8) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            }}
          />

          {/* Gradient Sweep */}
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.2) 50%, transparent 100%)'
                  : 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.2) 50%, transparent 100%)',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

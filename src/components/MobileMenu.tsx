import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-sm p-8 transition-colors duration-500"
            style={{
              backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
              borderLeft:
                theme === 'dark'
                  ? '1px solid rgba(0, 255, 255, 0.2)'
                  : '1px solid rgba(59, 130, 246, 0.2)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-8 right-8 p-2 rounded-full transition-all duration-500"
              style={{
                backgroundColor:
                  theme === 'dark'
                    ? 'rgba(0, 255, 255, 0.1)'
                    : 'rgba(59, 130, 246, 0.1)',
              }}
              onClick={onClose}
              whileHover={{
                scale: 1.1,
                rotate: 90,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <X
                className="w-6 h-6 transition-colors duration-500"
                style={{
                  color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                }}
              />
            </motion.button>

            {/* Navigation Links */}
            <nav className="mt-20">
              <ul className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={link.path} onClick={onClose}>
                      <motion.div
                        className="text-3xl cursor-pointer transition-colors duration-500"
                        style={{
                          color:
                            location.pathname === link.path
                              ? theme === 'dark'
                                ? '#00ffff'
                                : '#3b82f6'
                              : theme === 'dark'
                                ? '#ffffff'
                                : '#1f2937',
                        }}
                        whileHover={{
                          x: 10,
                          color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                        }}
                      >
                        {link.label}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Decorative Elements */}
            <motion.div
              className="absolute bottom-20 left-8 right-8 h-px"
              style={{
                background:
                  theme === 'dark'
                    ? 'linear-gradient(90deg, transparent, #00ffff, transparent)'
                    : 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
            />

            <motion.p
              className="absolute bottom-8 left-8 text-sm transition-colors duration-500"
              style={{
                color:
                  theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.6)'
                    : 'rgba(31, 41, 55, 0.6)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Neurify
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { ContactSection } from '@/components/home/ContactSection';

export const Contact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen pt-32 transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#f9fafb',
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="text-sm uppercase tracking-widest mb-4 inline-block transition-colors duration-500"
          style={{
            color: theme === 'dark' ? '#00ffff' : '#3b82f6',
          }}
        >
          Contact Us
        </motion.span>
        <h1
          className="text-6xl md:text-7xl mb-6 transition-colors duration-500"
          style={{
            color: theme === 'dark' ? '#ffffff' : '#1f2937',
          }}
        >
          Let's Build{' '}
          <span
            style={{
              backgroundImage:
                theme === 'dark'
                  ? 'linear-gradient(90deg, #00ffff, #a855f7)'
                  : 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Together
          </span>
        </h1>
        <p
          className="text-xl max-w-3xl mx-auto transition-colors duration-500"
          style={{
            color:
              theme === 'dark'
                ? 'rgba(255, 255, 255, 0.7)'
                : 'rgba(31, 41, 55, 0.7)',
          }}
        >
          Have a project in mind? We'd love to hear from you. Reach out and let's create
          something extraordinary together.
        </p>
      </motion.div>

      <ContactSection />
    </div>
  );
};

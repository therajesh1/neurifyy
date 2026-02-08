import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileMenu } from '@/components/MobileMenu';
import { useTheme } from '@/contexts/ThemeContext';
import { Sparkles, Menu } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? theme === 'dark'
              ? 'rgba(0, 0, 0, 0.8)'
              : 'rgba(255, 255, 255, 0.8)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? theme === 'dark'
              ? '1px solid rgba(0, 255, 255, 0.1)'
              : '1px solid rgba(59, 130, 246, 0.1)'
            : 'none',
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Sparkles
                    className="w-8 h-8"
                    style={{
                      color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                    }}
                  />
                </motion.div>
                <span
                  key={theme}
                  className="text-2xl transition-colors duration-500"
                  style={{
                    background:
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
                  Neurify
                </span>
              </motion.div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    className="relative cursor-pointer transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5"
                        style={{
                          backgroundColor: theme === 'dark' ? '#00ffff' : '#3b82f6',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Side - Theme Toggle + Mobile Menu */}
            <div className="flex items-center gap-4">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-3 rounded-full transition-all duration-500"
                style={{
                  backgroundColor:
                    theme === 'dark'
                      ? 'rgba(0, 255, 255, 0.1)'
                      : 'rgba(59, 130, 246, 0.1)',
                }}
                onClick={() => setIsMobileMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu
                  className="w-6 h-6 transition-colors duration-500"
                  style={{
                    color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
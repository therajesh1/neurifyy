import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { Sparkles, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const footerLinks = {
    Company: [
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Contact', path: '/contact' },
    ],
    Services: [
      { label: 'Web Development', path: '/services' },
      { label: 'Machine Learning', path: '/services' },
      { label: 'AI Marketing', path: '/services' },
    ],
    Connect: [
      { label: 'Twitter', icon: Twitter },
      { label: 'LinkedIn', icon: Linkedin },
      { label: 'GitHub', icon: Github },
      { label: 'Email', icon: Mail },
    ],
  };

  return (
    <footer
      className="border-t transition-all duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff',
        borderColor:
          theme === 'dark'
            ? 'rgba(0, 255, 255, 0.1)'
            : 'rgba(59, 130, 246, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <motion.div
                className="flex items-center gap-2 mb-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
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
            <p
              className="text-sm transition-colors duration-500"
              style={{
                color:
                  theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.6)'
                    : 'rgba(31, 41, 55, 0.6)',
              }}
            >
              Transforming businesses with cutting-edge AI and machine learning
              solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className="mb-6 transition-colors duration-500"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#1f2937',
              }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>
                    <motion.span
                      className="text-sm cursor-pointer transition-colors duration-500"
                      style={{
                        color:
                          theme === 'dark'
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(31, 41, 55, 0.6)',
                      }}
                      whileHover={{
                        color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                        x: 5,
                      }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3
              className="mb-6 transition-colors duration-500"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#1f2937',
              }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>
                    <motion.span
                      className="text-sm cursor-pointer transition-colors duration-500"
                      style={{
                        color:
                          theme === 'dark'
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(31, 41, 55, 0.6)',
                      }}
                      whileHover={{
                        color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                        x: 5,
                      }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className="mb-6 transition-colors duration-500"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#1f2937',
              }}
            >
              Connect
            </h3>
            <div className="flex gap-4">
              {footerLinks.Connect.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.label}
                    className="p-3 rounded-xl cursor-pointer transition-all duration-500"
                    style={{
                      backgroundColor:
                        theme === 'dark'
                          ? 'rgba(0, 255, 255, 0.1)'
                          : 'rgba(59, 130, 246, 0.1)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor:
                        theme === 'dark'
                          ? 'rgba(0, 255, 255, 0.2)'
                          : 'rgba(59, 130, 246, 0.2)',
                      rotate: 360,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-500"
                      style={{
                        color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-500"
          style={{
            borderColor:
              theme === 'dark'
                ? 'rgba(0, 255, 255, 0.1)'
                : 'rgba(59, 130, 246, 0.1)',
          }}
        >
          <p
            className="text-sm transition-colors duration-500"
            style={{
              color:
                theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.6)'
                  : 'rgba(31, 41, 55, 0.6)',
            }}
          >
            © 2026 NeuralMark. All rights reserved.
          </p>
          <div className="flex gap-6">
            <motion.span
              className="text-sm cursor-pointer transition-colors duration-500"
              style={{
                color:
                  theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.6)'
                    : 'rgba(31, 41, 55, 0.6)',
              }}
              whileHover={{
                color: theme === 'dark' ? '#00ffff' : '#3b82f6',
              }}
            >
              Privacy Policy
            </motion.span>
            <motion.span
              className="text-sm cursor-pointer transition-colors duration-500"
              style={{
                color:
                  theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.6)'
                    : 'rgba(31, 41, 55, 0.6)',
              }}
              whileHover={{
                color: theme === 'dark' ? '#00ffff' : '#3b82f6',
              }}
            >
              Terms of Service
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};

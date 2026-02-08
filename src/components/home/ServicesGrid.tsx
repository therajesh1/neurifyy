import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';


import { Link } from 'react-router-dom';
import { services } from '@/data/services';

export const ServicesGrid: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-32 px-6 transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-sm uppercase tracking-widest mb-4 inline-block transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#00ffff' : '#3b82f6',
            }}
          >
            Our Services
          </motion.span>
          <h2
            className="text-5xl md:text-6xl mb-6 transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#ffffff' : '#1f2937',
            }}
          >
            What We{' '}
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
              }}
            >
              Deliver
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto transition-colors duration-500"
            style={{
              color: theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(31, 41, 55, 0.7)',
            }}
          >
            Comprehensive AI-powered solutions designed to transform your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link to={`/services/${service.id}`} key={service.id} className="block h-full">
                <motion.div
                  className="service-card group relative p-8 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 h-full"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                    border: theme === 'dark'
                      ? '1px solid rgba(0, 255, 255, 0.1)'
                      : '1px solid rgba(59, 130, 246, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                >
                  {/* Gradient Border Animation on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        theme === 'dark'
                          ? 'linear-gradient(135deg, rgba(0,255,255,0.2), rgba(168,85,247,0.2))'
                          : 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
                      filter: 'blur(20px)',
                    }}
                  />

                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        theme === 'dark'
                          ? 'radial-gradient(circle at center, rgba(0,255,255,0.05) 0%, transparent 70%)'
                          : 'radial-gradient(circle at center, rgba(59,130,246,0.05) 0%, transparent 70%)',
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-block p-4 rounded-xl transition-all duration-500"
                      style={{
                        backgroundColor: theme === 'dark'
                          ? 'rgba(0, 255, 255, 0.1)'
                          : 'rgba(59, 130, 246, 0.1)',
                      }}
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon
                        className="w-8 h-8 transition-colors duration-500"
                        style={{
                          color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                        }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="text-xl mb-3 transition-colors duration-500"
                      style={{
                        color: theme === 'dark' ? '#ffffff' : '#1f2937',
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed transition-colors duration-500"
                      style={{
                        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(31, 41, 55, 0.6)',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{
                        color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                      }}
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm">Learn more</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Floating Particles on Hover */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: theme === 'dark' ? '#00ffff' : '#3b82f6',
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: theme === 'dark' ? '#a855f7' : '#8b5cf6',
                    }}
                    animate={{
                      y: [0, 20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section >
  );
};

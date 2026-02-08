import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';

import { Link } from 'react-router-dom';
import { services } from '@/data/services';



export const Services: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      className="min-h-screen pt-32 pb-20 px-6 transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#f9fafb',
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-20"
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
          Our Services
        </motion.span>
        <h1
          className="text-6xl md:text-7xl mb-6 transition-colors duration-500"
          style={{
            color: theme === 'dark' ? '#ffffff' : '#1f2937',
          }}
        >
          Complete{' '}
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
            AI Solutions
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
          Explore our comprehensive suite of AI-powered services designed to transform your business
        </p>
      </motion.div>

      {/* Services Grid */}
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const Icon = service.icon;
            return (
              <Link to={`/services/${service.id}`} key={service.id} className="block h-full">
                <motion.div
                  className="service-card group p-8 rounded-2xl transition-all duration-500 h-full"
                  style={{
                    backgroundColor:
                      theme === 'dark'
                        ? 'rgba(255, 255, 255, 0.03)'
                        : 'rgba(0, 0, 0, 0.02)',
                    border:
                      theme === 'dark'
                        ? '1px solid rgba(0, 255, 255, 0.1)'
                        : '1px solid rgba(59, 130, 246, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-block p-4 rounded-xl transition-all duration-500"
                    style={{
                      backgroundColor:
                        theme === 'dark'
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
                      className="w-10 h-10 transition-colors duration-500"
                      style={{
                        color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-2xl mb-3 transition-colors duration-500"
                    style={{
                      color: theme === 'dark' ? '#ffffff' : '#1f2937',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm mb-6 transition-colors duration-500"
                    style={{
                      color:
                        theme === 'dark'
                          ? 'rgba(255, 255, 255, 0.6)'
                          : 'rgba(31, 41, 55, 0.6)',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature: { title: string; description: string[] }, featureIndex: number) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm transition-colors duration-500"
                        style={{
                          color:
                            theme === 'dark'
                              ? 'rgba(255, 255, 255, 0.7)'
                              : 'rgba(31, 41, 55, 0.7)',
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isInView ? { opacity: 1, x: 0 } : {}
                        }
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor:
                              theme === 'dark' ? '#00ffff' : '#3b82f6',
                          }}
                        />
                        {feature.title}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Button */}
                  <motion.div
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.button
                      className="px-6 py-2 rounded-full text-sm transition-all duration-500"
                      style={{
                        backgroundColor:
                          theme === 'dark'
                            ? 'rgba(0, 255, 255, 0.1)'
                            : 'rgba(59, 130, 246, 0.1)',
                        color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                        border:
                          theme === 'dark'
                            ? '1px solid rgba(0, 255, 255, 0.3)'
                            : '1px solid rgba(59, 130, 246, 0.3)',
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor:
                          theme === 'dark'
                            ? 'rgba(0, 255, 255, 0.2)'
                            : 'rgba(59, 130, 246, 0.2)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

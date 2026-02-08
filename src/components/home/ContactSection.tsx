import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'neura.mark.officialmail@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '8433541311',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff',
      }}
    >
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
            Get In Touch
          </motion.span>
          <h2
            className="text-5xl md:text-6xl mb-6 transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#ffffff' : '#1f2937',
            }}
          >
            Let's{' '}
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
              Connect
            </span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl text-center"
          >
            <h3
              className="text-3xl mb-8 transition-colors duration-500"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#1f2937',
              }}
            >
              Start Your AI Journey Today
            </h3>
            <p
              className="text-lg mb-12 transition-colors duration-500"
              style={{
                color:
                  theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(31, 41, 55, 0.7)',
              }}
            >
              Ready to transform your business with cutting-edge AI solutions?
              Let's discuss how we can help you achieve your goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    className="flex flex-col items-center gap-4 group cursor-pointer px-4 py-6 rounded-2xl transition-all duration-500"
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="p-4 rounded-xl transition-all duration-500"
                      style={{
                        backgroundColor:
                          theme === 'dark'
                            ? 'rgba(0, 255, 255, 0.1)'
                            : 'rgba(59, 130, 246, 0.1)',
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors duration-500"
                        style={{
                          color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                        }}
                      />
                    </motion.div>
                    <div>
                      <p
                        className="text-sm mb-1 transition-colors duration-500"
                        style={{
                          color:
                            theme === 'dark'
                              ? 'rgba(255, 255, 255, 0.6)'
                              : 'rgba(31, 41, 55, 0.6)',
                        }}
                      >
                        {info.label}
                      </p>
                      <p
                        className="text-lg font-medium transition-colors duration-500"
                        style={{
                          color: theme === 'dark' ? '#ffffff' : '#1f2937',
                        }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

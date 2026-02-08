import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { Lightbulb, Search, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Discover',
    description: 'We analyze your business needs and identify opportunities for AI-powered solutions.',
  },
  {
    icon: Search,
    title: 'Strategy',
    description: 'Develop a comprehensive roadmap tailored to your specific goals and requirements.',
  },
  {
    icon: Code,
    title: 'Execute',
    description: 'Build and deploy cutting-edge solutions using the latest AI and ML technologies.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy your solution and provide continuous optimization and support.',
  },
];

export const Process: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#f9fafb',
      }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
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
            Our Process
          </motion.span>
          <h2
            className="text-5xl md:text-6xl mb-6 transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#ffffff' : '#1f2937',
            }}
          >
            How We{' '}
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
              Transform
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
            <motion.div
              className="h-full transition-colors duration-500"
              style={{
                background:
                  theme === 'dark'
                    ? 'linear-gradient(90deg, #00ffff, #a855f7, #ec4899, #00ffff)'
                    : 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                transformOrigin: 'left',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Card */}
                  <div className="relative z-10 p-8 rounded-2xl transition-all duration-500 group cursor-pointer"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                      border: theme === 'dark'
                        ? '1px solid rgba(0, 255, 255, 0.2)'
                        : '1px solid rgba(59, 130, 246, 0.2)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Number Badge */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-500"
                      style={{
                        background:
                          theme === 'dark'
                            ? 'linear-gradient(135deg, #00ffff, #a855f7)'
                            : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        color: '#ffffff',
                        boxShadow:
                          theme === 'dark'
                            ? '0 0 20px rgba(0, 255, 255, 0.3)'
                            : '0 4px 20px rgba(59, 130, 246, 0.3)',
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-flex p-4 rounded-xl transition-all duration-500"
                      style={{
                        backgroundColor:
                          theme === 'dark'
                            ? 'rgba(0, 255, 255, 0.1)'
                            : 'rgba(59, 130, 246, 0.1)',
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 0],
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
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed transition-colors duration-500"
                      style={{
                        color:
                          theme === 'dark'
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(31, 41, 55, 0.6)',
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Glow Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          theme === 'dark'
                            ? 'radial-gradient(circle at center, rgba(0,255,255,0.1) 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)',
                      }}
                    />
                  </div>

                  {/* Floating Particle */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: theme === 'dark' ? '#00ffff' : '#3b82f6',
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

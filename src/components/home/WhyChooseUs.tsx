import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { Award, Users, Zap } from 'lucide-react';

const stats = [
  {
    icon: Award,
    end: 280,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    icon: Users,
    end: 200,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: Zap,
    end: 100,
    suffix: '%',
    label: 'Success Rate',
  },
];

const Counter: React.FC<{ end: number; suffix: string; isInView: boolean }> = ({
  end,
  suffix,
  isInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const WhyChooseUs: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
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
            Why Choose Us
          </motion.span>
          <h2
            className="text-5xl md:text-6xl mb-6 transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#ffffff' : '#1f2937',
            }}
          >
            The{' '}
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
              Neurify
            </span>{' '}
            Difference
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  className="relative p-8 rounded-2xl text-center overflow-hidden transition-all duration-500"
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
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                >
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        theme === 'dark'
                          ? 'radial-gradient(circle at center, rgba(0,255,255,0.1) 0%, transparent 70%)'
                          : 'radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)',
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 mb-6 inline-flex items-center justify-center"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
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
                        scale: 1.2,
                        rotate: 360,
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
                  </motion.div>

                  {/* Counter */}
                  <motion.div
                    className="relative z-10 text-5xl mb-3 transition-colors duration-500"
                    style={{
                      background:
                        theme === 'dark'
                          ? 'linear-gradient(90deg, #00ffff, #a855f7)'
                          : 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <Counter end={stat.end} suffix={stat.suffix} isInView={isInView} />
                  </motion.div>

                  {/* Label */}
                  <p
                    className="relative z-10 text-sm transition-colors duration-500"
                    style={{
                      color:
                        theme === 'dark'
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'rgba(31, 41, 55, 0.7)',
                    }}
                  >
                    {stat.label}
                  </p>

                  {/* Floating Particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        backgroundColor:
                          i % 2 === 0
                            ? theme === 'dark'
                              ? '#00ffff'
                              : '#3b82f6'
                            : theme === 'dark'
                              ? '#a855f7'
                              : '#8b5cf6',
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

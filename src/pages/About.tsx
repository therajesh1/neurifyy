import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { Target, Eye, Heart, Zap, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing the boundaries of what\'s possible with AI and ML technology.',
  },
  {
    icon: Heart,
    title: 'Client Focus',
    description: 'Your success is our success. We\'re dedicated to delivering exceptional results.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'Maintaining the highest standards in every project we undertake.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together with clients as partners to achieve extraordinary outcomes.',
  },
];

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'CEO & AI Strategist',
    description: 'Leading the vision for AI-powered business transformation.',
  },
  {
    name: 'Sarah Martinez',
    role: 'Head of Machine Learning',
    description: 'Pioneering advanced ML solutions for complex challenges.',
  },
  {
    name: 'David Kumar',
    role: 'Creative Director',
    description: 'Crafting beautiful experiences that merge design and technology.',
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    description: 'Building robust, scalable solutions with cutting-edge tech.',
  },
];

export const About: React.FC = () => {
  const { theme } = useTheme();
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });

  return (
    <div
      className="min-h-screen pt-32 pb-20 px-6 transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#f9fafb',
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-32"
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
          About Us
        </motion.span>
        <h1
          className="text-6xl md:text-7xl mb-6 transition-colors duration-500"
          style={{
            color: theme === 'dark' ? '#ffffff' : '#1f2937',
          }}
        >
          Shaping the{' '}
          <span
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
            Future
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
          We are a team of innovators, creators, and problem-solvers dedicated to
          transforming businesses through the power of artificial intelligence.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <section ref={missionRef} className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="p-10 rounded-2xl transition-all duration-500"
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
            initial={{ opacity: 0, x: -50 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="mb-6 inline-block p-4 rounded-xl transition-all duration-500"
              style={{
                backgroundColor:
                  theme === 'dark'
                    ? 'rgba(0, 255, 255, 0.1)'
                    : 'rgba(59, 130, 246, 0.1)',
              }}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Target
                className="w-10 h-10 transition-colors duration-500"
                style={{
                  color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                }}
              />
            </motion.div>
            <h2
              className="text-3xl mb-4 transition-colors duration-500"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#1f2937',
              }}
            >
              Our Mission
            </h2>
            <p
              className="text-lg transition-colors duration-500"
              style={{
                color:
                  theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(31, 41, 55, 0.7)',
              }}
            >
              To empower businesses with cutting-edge AI solutions that drive growth,
              efficiency, and innovation. We believe in making advanced technology
              accessible and practical for organizations of all sizes.
            </p>
          </motion.div>

          <motion.div
            className="p-10 rounded-2xl transition-all duration-500"
            style={{
              backgroundColor:
                theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.03)'
                  : 'rgba(0, 0, 0, 0.02)',
              border:
                theme === 'dark'
                  ? '1px solid rgba(168, 85, 247, 0.1)'
                  : '1px solid rgba(139, 92, 246, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="mb-6 inline-block p-4 rounded-xl transition-all duration-500"
              style={{
                backgroundColor:
                  theme === 'dark'
                    ? 'rgba(168, 85, 247, 0.1)'
                    : 'rgba(139, 92, 246, 0.1)',
              }}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Eye
                className="w-10 h-10 transition-colors duration-500"
                style={{
                  color: theme === 'dark' ? '#a855f7' : '#8b5cf6',
                }}
              />
            </motion.div>
            <h2
              className="text-3xl mb-4 transition-colors duration-500"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#1f2937',
              }}
            >
              Our Vision
            </h2>
            <p
              className="text-lg transition-colors duration-500"
              style={{
                color:
                  theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(31, 41, 55, 0.7)',
              }}
            >
              To be the global leader in AI-powered digital transformation,
              creating a future where intelligent technology seamlessly enhances
              every aspect of business and human experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="max-w-7xl mx-auto mb-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl mb-6 transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#ffffff' : '#1f2937',
            }}
          >
            Our{' '}
            <span
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
              Values
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="p-8 rounded-2xl text-center transition-all duration-500 group"
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
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="mb-6 inline-flex p-4 rounded-xl transition-all duration-500"
                  style={{
                    backgroundColor:
                      theme === 'dark'
                        ? 'rgba(0, 255, 255, 0.1)'
                        : 'rgba(59, 130, 246, 0.1)',
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon
                    className="w-8 h-8 transition-colors duration-500"
                    style={{
                      color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                    }}
                  />
                </motion.div>
                <h3
                  className="text-xl mb-3 transition-colors duration-500"
                  style={{
                    color: theme === 'dark' ? '#ffffff' : '#1f2937',
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm transition-colors duration-500"
                  style={{
                    color:
                      theme === 'dark'
                        ? 'rgba(255, 255, 255, 0.6)'
                        : 'rgba(31, 41, 55, 0.6)',
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl mb-6 transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#ffffff' : '#1f2937',
            }}
          >
            Meet Our{' '}
            <span
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
              Team
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="p-8 rounded-2xl text-center transition-all duration-500"
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
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full transition-all duration-500"
                  style={{
                    background:
                      theme === 'dark'
                        ? 'linear-gradient(135deg, #00ffff, #a855f7)'
                        : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                <h3
                  className="text-xl mb-2 transition-colors duration-500"
                  style={{
                    color: theme === 'dark' ? '#ffffff' : '#1f2937',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm mb-3 transition-colors duration-500"
                  style={{
                    color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                  }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm transition-colors duration-500"
                  style={{
                    color:
                      theme === 'dark'
                        ? 'rgba(255, 255, 255, 0.6)'
                        : 'rgba(31, 41, 55, 0.6)',
                  }}
                >
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { ExternalLink } from 'lucide-react';

import web1 from '@/assets/images/portfolio/web1.png';
import ai1 from '@/assets/images/portfolio/ai1.png';
import brand1 from '@/assets/images/portfolio/brand1.png';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: web1,
    link: '/portfolio/ecommerce',
  },
  {
    title: 'Intelligent Chatbot',
    category: 'AI Assistant',
    image: ai1,
    link: '/portfolio/ai-chatbots',
  },
  {
    title: 'Brand Identity',
    category: 'Graphic Design',
    image: brand1,
    link: '/portfolio/brand-identity',
  },
  {
    title: 'VR Experience',
    category: 'Virtual Reality',
    image: 'https://images.unsplash.com/photo-1658808183854-97ed5e8632fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMHZpcnR1YWwlMjByZWFsaXR5fGVufDF8fHx8MTc3MDAyMDY1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/portfolio/vr-experience',
  },
];

import { useNavigate } from 'react-router-dom';

export const Portfolio: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="py-32 px-6 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#f9fafb',
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
            className="text-lg uppercase tracking-widest mb-4 inline-block transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#00ffff' : '#3b82f6',
            }}
          >
            Portfolio
          </motion.span>
          <h2
            className="text-6xl md:text-7xl mb-6 transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#ffffff' : '#1f2937',
            }}
          >
            Our{' '}
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
              Masterpieces
            </span>
          </h2>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <motion.div
            className="flex gap-6 pb-8 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative flex-shrink-0 w-[500px] h-[600px] rounded-2xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => navigate(item.link)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background:
                      theme === 'dark'
                        ? 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                  }}
                />

                {/* Glow Border */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border:
                      theme === 'dark'
                        ? '2px solid rgba(0, 255, 255, 0.5)'
                        : '2px solid rgba(59, 130, 246, 0.5)',
                    borderRadius: '1rem',
                    boxShadow:
                      theme === 'dark'
                        ? '0 0 40px rgba(0, 255, 255, 0.3)'
                        : '0 0 40px rgba(59, 130, 246, 0.3)',
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className="text-lg uppercase tracking-wider mb-2 inline-block transition-colors duration-500"
                      style={{
                        color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                      }}
                    >
                      {item.category}
                    </span>
                  </motion.div>

                  <h3 className="text-4xl mb-4 text-white">{item.title}</h3>

                  {/* View Button */}
                  <motion.div
                    className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                    }}
                  >
                    <span className="text-sm">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Floating Icon */}
                <motion.div
                  className="absolute top-6 right-6 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    backgroundColor:
                      theme === 'dark'
                        ? 'rgba(0, 255, 255, 0.2)'
                        : 'rgba(59, 130, 246, 0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <ExternalLink
                    className="w-5 h-5"
                    style={{
                      color: theme === 'dark' ? '#00ffff' : '#3b82f6',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {portfolioItems.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full transition-colors duration-500"
                style={{
                  backgroundColor:
                    theme === 'dark'
                      ? 'rgba(0, 255, 255, 0.3)'
                      : 'rgba(59, 130, 246, 0.3)',
                }}
                whileHover={{
                  scale: 1.5,
                  backgroundColor:
                    theme === 'dark' ? '#00ffff' : '#3b82f6',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

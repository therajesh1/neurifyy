import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          particle.x -= dx * 0.01;
          particle.y -= dy * 0.01;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark'
          ? 'rgba(0, 255, 255, 0.5)'
          : 'rgba(59, 130, 246, 0.5)';
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = theme === 'dark'
                ? `rgba(0, 255, 255, ${0.2 - distance / 600})`
                : `rgba(59, 130, 246, ${0.2 - distance / 600})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#f9fafb',
      }}
    >
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles
            className="w-6 h-6"
            style={{
              color: theme === 'dark' ? '#00ffff' : '#3b82f6',
            }}
          />
          <span
            className="text-sm uppercase tracking-widest transition-colors duration-500"
            style={{
              color: theme === 'dark' ? '#00ffff' : '#3b82f6',
            }}
          >
            AI-Powered Marketing Agency
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 transition-colors duration-500"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            lineHeight: 1.1,
            color: theme === 'dark' ? '#ffffff' : '#1f2937',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We Build{' '}
          <span
            style={{
              backgroundImage:
                theme === 'dark'
                  ? 'linear-gradient(90deg, #00ffff, #a855f7, #ec4899)'
                  : 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Intelligent
          </span>
          <br />
          Digital Experiences
        </motion.h1>

        <motion.p
          className="text-xl mb-12 max-w-3xl mx-auto transition-colors duration-500"
          style={{
            color: theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(31, 41, 55, 0.7)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transforming businesses with cutting-edge AI, machine learning, and automation solutions.
          Your gateway to the future of digital marketing.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-500"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(90deg, #00ffff, #a855f7)'
                  : 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              color: '#ffffff',
              boxShadow:
                theme === 'dark'
                  ? '0 0 30px rgba(0, 255, 255, 0.3)'
                  : '0 4px 20px rgba(59, 130, 246, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                theme === 'dark'
                  ? '0 0 40px rgba(0, 255, 255, 0.5)'
                  : '0 6px 30px rgba(59, 130, 246, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="px-8 py-4 rounded-full border-2 transition-all duration-500"
            style={{
              borderColor: theme === 'dark' ? '#00ffff' : '#3b82f6',
              color: theme === 'dark' ? '#00ffff' : '#3b82f6',
              backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: theme === 'dark' ? 'rgba(0, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 transition-colors duration-500"
          style={{
            borderColor: theme === 'dark' ? 'rgba(0, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.3)',
          }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: theme === 'dark' ? '#00ffff' : '#3b82f6',
            }}
          />
        </motion.div>
      </motion.div>
    </section >
  );
};

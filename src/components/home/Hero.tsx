import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowRight, Sparkles } from 'lucide-react';


export const Hero: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [index, setIndex] = React.useState(0);


  const services = [
    "Websites",
    "ML Solutions",
    "Thumbnails",
    "3D Models",
    "Graphic Designing",
    "AI Chatbots",
    "Dashboards",
    "Database Management"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize_canvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize_canvas);
    resize_canvas();

    // Neural Mesh Configuration
    const particleCount = 60;
    const connectionDistance = 200;
    const mouseDistance = 250;

    interface Particle {
      x: number;
      y: number;
      z: number; // Depth factor
      vx: number;
      vy: number;
      baseRadius: number;
    }

    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2 + 0.5, // Depth: 0.5 to 2.5
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          baseRadius: Math.random() * 2 + 1,
        });
      }
    };

    initParticles();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const themeColor = theme === 'dark'
        ? { r: 0, g: 255, b: 255 } // Cyan
        : { r: 59, g: 130, b: 246 }; // Blue

      // Update and Draw Particles
      particles.forEach((p, i) => {
        // Movement
        p.x += p.vx * p.z; // Move faster if closer (higher z)
        p.y += p.vy * p.z;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse Repulsion
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseDistance) {
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const force = (mouseDistance - dist) / mouseDistance;
          p.vx -= forceDirectionX * force * 0.05;
          p.vy -= forceDirectionY * force * 0.05;
        }

        // Draw Point
        ctx.beginPath();
        const radius = p.baseRadius * (p.z * 0.5); // Larger if closer
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, ${0.2 * p.z})`;
        ctx.fill();

        // Draw Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - dist2 / connectionDistance;
            ctx.strokeStyle = `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, ${opacity * 0.1 * p.z})`;
            ctx.lineWidth = 1 * p.z; // Thicker if closer
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize_canvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
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
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            lineHeight: 1.1,
            color: theme === 'dark' ? '#ffffff' : '#1f2937',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We Build{' '}
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={services[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
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
                minHeight: '1.2em'
              }}
            >
              {services[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          className="text-2xl mb-12 max-w-3xl mx-auto transition-colors duration-500"
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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>

    </section >
  );
};

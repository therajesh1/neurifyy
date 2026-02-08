import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';

type CursorState = 'default' | 'button' | 'service' | 'text' | 'image' | 'click';

export const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const trailRef = useRef<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      
      // Add trail position
      trailRef.current.push({ x: e.clientX, y: e.clientY });
      if (trailRef.current.length > 5) {
        trailRef.current.shift();
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('button, a, [role="button"]')) {
        setCursorState('button');
      } else if (target.closest('.service-card')) {
        setCursorState('service');
      } else if (target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3') {
        setCursorState('text');
      } else if (target.tagName === 'IMG') {
        setCursorState('image');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = () => {
      setCursorState('click');
      setTimeout(() => setCursorState('default'), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  const getCursorSize = () => {
    switch (cursorState) {
      case 'button': return 40;
      case 'service': return 60;
      case 'text': return 8;
      case 'image': return 80;
      case 'click': return 60;
      default: return 20;
    }
  };

  const getCursorColor = () => {
    if (theme === 'dark') {
      switch (cursorState) {
        case 'button': return 'rgba(0, 255, 255, 0.3)';
        case 'service': return 'rgba(168, 85, 247, 0.4)';
        case 'image': return 'rgba(236, 72, 153, 0.3)';
        default: return 'rgba(0, 255, 255, 0.6)';
      }
    } else {
      switch (cursorState) {
        case 'button': return 'rgba(59, 130, 246, 0.3)';
        case 'service': return 'rgba(139, 92, 246, 0.4)';
        case 'image': return 'rgba(236, 72, 153, 0.3)';
        default: return 'rgba(59, 130, 246, 0.6)';
      }
    }
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: getCursorSize(),
            height: cursorState === 'text' ? 2 : getCursorSize(),
            backgroundColor: getCursorColor(),
            scale: cursorState === 'click' ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          className="rounded-full"
          style={{
            boxShadow: theme === 'dark' 
              ? '0 0 20px rgba(0, 255, 255, 0.5)' 
              : '0 0 20px rgba(59, 130, 246, 0.3)',
          }}
        />
      </motion.div>

      {/* Cursor ring for button hover */}
      {cursorState === 'button' && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[9998] border-2 rounded-full"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
            borderColor: theme === 'dark' ? 'rgba(0, 255, 255, 0.5)' : 'rgba(59, 130, 246, 0.5)',
          }}
          animate={{
            width: 60,
            height: 60,
            scale: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
        />
      )}
    </>
  );
};

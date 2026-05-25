import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

const BackgroundEffect = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(prev => !prev);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    // Initial check
    setIsDark(document.documentElement.classList.contains('dark'));

    // Dynamic mutation observer to detect theme change instantly
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background Color Overlay */}
      <motion.div 
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          backgroundColor: isDark 
            ? (isClicked ? 'rgba(15, 5, 25, 0.96)' : 'rgba(10, 10, 18, 0.96)') 
            : 'rgba(255, 255, 255, 1)'
        }}
      />

      {/* Primary Blob - Follows Mouse */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[150px] transition-all duration-1000"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isDark ? 0.35 : 0.06,
          background: isDark 
            ? (isClicked 
               ? 'radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(139,92,246,0.4) 100%)' 
               : 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(139,92,246,0.4) 100%)')
            : 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.02) 100%)',
        }}
        transition={{ type: 'spring', damping: 20 }}
      />
      
      {/* Secondary Blob - Static/Floating */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[180px] transition-all duration-1000 ${
        isDark ? 'opacity-10 bg-accent/30' : 'opacity-[0.015] bg-neutral-900'
      }`} />

      {isDark && <div className="absolute inset-0 backdrop-blur-[2px]" />}
    </div>
  );
};

export default BackgroundEffect;

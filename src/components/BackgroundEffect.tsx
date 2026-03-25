import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

const BackgroundEffect = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isClicked, setIsClicked] = useState(false);

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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background Color Overlay */}
      <motion.div 
        className="absolute inset-0 transition-colors duration-1000"
        animate={{
          backgroundColor: isClicked ? 'rgba(20, 10, 30, 0.95)' : 'rgba(10, 10, 10, 0.95)'
        }}
      />

      {/* Primary Blob - Follows Mouse */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[150px] opacity-50"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
          background: isClicked 
            ? 'radial-gradient(circle, rgba(236,72,153,0.9) 0%, rgba(139,92,246,0.5) 100%)' 
            : 'radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(139,92,246,0.5) 100%)',
        }}
        transition={{ type: 'spring', damping: 20 }}
      />
      
      {/* Secondary Blob - Static/Floating */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[180px] opacity-15 bg-accent/40" />

      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
};

export default BackgroundEffect;

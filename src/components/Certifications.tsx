import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { certifications } from '../constants';

const Certifications = () => {
  const [activeCertIndex, setActiveCertIndex] = useState<number | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragDistance = useRef(0);

  // Helper to extract Google Drive embed preview link
  const getEmbedUrl = (url: string) => {
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  // Duplicate certifications to create a seamless infinite loop
  const doubledCertifications = [...certifications, ...certifications];

  // Auto-scrolling interval using requestAnimationFrame for pristine smoothness
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.5; // pixels per frame

    const scroll = () => {
      if (!isPaused && !isDragging && activeCertIndex === null) {
        container.scrollLeft += speed;
        
        // Wrap around seamlessly at halfway mark
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging, activeCertIndex]);

  // Handle continuous wrap-around for manual/touch scrolls too
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
    }
  };

  // Mouse Drag to Scroll Helpers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; // multiplier for drag sensitivity
    dragDistance.current = Math.abs(x - startX.current);
    container.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Card click handler distinguishing tap/click from slide drags
  const handleCardClick = (index: number) => {
    if (dragDistance.current > 5) return;
    setActiveCertIndex(index % certifications.length);
  };

  // Reset loading spinner on certificate switch
  useEffect(() => {
    setIframeLoading(true);
  }, [activeCertIndex]);

  // Keyboard navigation for fullscreen modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeCertIndex === null) return;
      if (e.key === 'Escape') {
        setActiveCertIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setActiveCertIndex((prev) => 
          prev !== null ? (prev - 1 + certifications.length) % certifications.length : null
        );
      } else if (e.key === 'ArrowRight') {
        setActiveCertIndex((prev) => 
          prev !== null ? (prev + 1) % certifications.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertIndex]);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Award size={14} />
            <span>Verified Credentials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-display"
          >
            Certifications
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base mb-2"
          >
            An interactive catalog of academic certifications and technical specialized credentials.
          </motion.p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </div>

      {/* Side-by-side auto-scrolling container */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Left fade gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        {/* Right fade gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div 
          ref={containerRef}
          className="overflow-x-auto flex gap-6 px-16 py-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onScroll={handleScroll}
        >
          {doubledCertifications.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              onClick={() => handleCardClick(index)}
              className={`w-[290px] sm:w-[350px] md:w-[420px] flex-shrink-0 glass rounded-2xl overflow-hidden flex flex-col justify-between border transition-all duration-300 relative group cursor-pointer ${
                cert.isImportant 
                  ? 'border-accent/40 shadow-[0_0_15px_rgba(var(--accent-rgb),0.05)] hover:border-accent' 
                  : 'border-border/50 hover:border-accent/30'
              }`}
            >
              {/* Visual Accent/Glow on Group Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card Header Info */}
              <div className="p-5 pb-4 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] bg-foreground/5 dark:bg-white/5 border border-border px-2 py-0.5 rounded-full font-mono text-foreground/60">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-sm sm:text-base font-bold line-clamp-2 text-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-1.5 min-h-[40px] sm:min-h-[48px]">
                  {cert.title}
                  {cert.isImportant && (
                    <Sparkles size={14} className="text-accent flex-shrink-0 animate-pulse" />
                  )}
                </h3>
              </div>

              {/* Direct Certificate Live Embed View (No button click required to view) */}
              <div className="px-5 pb-5 relative z-10 flex-grow">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-neutral-900/40">
                  {/* Sandboxed iframe preview cropped to hide Google Drive header and pop-out button */}
                  <iframe
                    src={getEmbedUrl(cert.url)}
                    className="absolute border-0 pointer-events-none"
                    style={{
                      top: '-45px',
                      left: '0',
                      width: '100%',
                      height: 'calc(100% + 45px)',
                    }}
                    title={cert.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay block to intercept clicks so mouse acts properly */}
                  <div className="absolute inset-0 z-20 bg-transparent" />
                  
                  {/* Important badge visual */}
                  {cert.isImportant && (
                    <div className="absolute top-2 left-2 z-30 flex items-center gap-1 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded-md shadow-md shadow-accent/20">
                      <ShieldCheck size={12} />
                      <span>IMPORTANT</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Discreet footer helper for desktop hover */}
              <div className="px-5 py-2.5 bg-foreground/[0.02] dark:bg-white/[0.01] border-t border-border/40 text-[10px] text-foreground/40 font-mono flex items-center justify-between">
                <span>Drag to move / Tap to zoom</span>
                <span className="text-accent hover:underline flex items-center gap-1 transition-colors">
                  <span>View Inside</span>
                  <ExternalLink size={10} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen interactive in-portfolio Modal */}
      {activeCertIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[150] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 backdrop-blur-xl">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Header info */}
          <div className="w-full max-w-5xl mb-4 text-center relative z-10">
            <h3 className="text-white font-bold text-base sm:text-lg md:text-2xl font-display max-w-3xl mx-auto line-clamp-1 px-8">
              {certifications[activeCertIndex].title}
            </h3>
            <p className="text-accent/80 font-mono text-xs sm:text-sm mt-1">
              Verified Credential • {certifications[activeCertIndex].date}
            </p>
          </div>

          {/* Main Certificate Iframe Container */}
          <div className="w-full max-w-5xl h-[65vh] sm:h-[70vh] md:h-[75vh] bg-neutral-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            {iframeLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 z-10">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-white/60 font-mono text-xs animate-pulse">Loading Certificate Viewer...</p>
              </div>
            )}
            <iframe
              src={getEmbedUrl(certifications[activeCertIndex].url)}
              className="absolute border-0 bg-white"
              style={{
                top: '-52px',
                left: '0',
                width: '100%',
                height: 'calc(100% + 52px)',
              }}
              title={certifications[activeCertIndex].title}
              referrerPolicy="no-referrer"
              onLoad={() => setIframeLoading(false)}
            />
          </div>

          {/* Navigation & Action Controls */}
          {/* Close button */}
          <button
            onClick={() => setActiveCertIndex(null)}
            className="absolute top-4 right-4 z-[160] p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 text-white transition-all cursor-pointer"
            title="Close Viewer"
          >
            <X size={20} />
          </button>

          {/* Left/Right Navigation Buttons */}
          <button
            onClick={() => {
              setActiveCertIndex((prev) => 
                prev !== null ? (prev - 1 + certifications.length) % certifications.length : null
              );
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[160] p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 text-white transition-all cursor-pointer"
            title="Previous Certificate"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => {
              setActiveCertIndex((prev) => 
                prev !== null ? (prev + 1) % certifications.length : null
              );
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[160] p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 text-white transition-all cursor-pointer"
            title="Next Certificate"
          >
            <ChevronRight size={24} />
          </button>

          {/* Helper instructions */}
          <div className="mt-4 text-center text-xs text-white/40 font-mono">
            <span>Use Left / Right Arrows or swipe to navigate.</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;

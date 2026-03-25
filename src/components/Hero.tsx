import React from 'react';
import { motion } from 'motion/react';
import { Download, ChevronDown } from 'lucide-react';
import { personalInfo, socials } from '../constants';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Hero = () => {
  const { text, blink } = useTypingEffect(personalInfo.professions);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6">
            Available for Projects
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 font-display">
            I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-foreground/70 mb-8 max-w-2xl mx-auto min-h-[1.5em]">
            {text}
            <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl font-mono text-accent mb-12 italic"
          >
            {personalInfo.tagline}
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <motion.a
              href={personalInfo.resumeUrl}
              download="Nizam_Khan_M_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40 glass-hover"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
            <div className="flex items-center space-x-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -5, color: 'var(--color-accent)' }}
                  className="p-3 rounded-full glass glass-hover transition-all"
                  title={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="text-foreground/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

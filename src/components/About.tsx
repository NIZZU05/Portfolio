import React from 'react';
import { motion } from 'motion/react';
import { personalInfo, skills } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-all duration-500" />
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.name}
                className="relative rounded-2xl w-full max-w-md mx-auto object-cover aspect-square shadow-2xl transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
          <h2 className="text-4xl font-bold mb-8 font-display">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
              {personalInfo.about}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['Languages', 'Frameworks', 'AI/ML', 'Databases'].map((cat) => (
                <div key={cat}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                    {cat}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter((s) => s.category === cat)
                      .map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 rounded-full glass text-xs font-medium flex items-center gap-2"
                        >
                          <skill.icon size={14} />
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

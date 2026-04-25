import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../constants';

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-display">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-foreground/80 mb-4">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Calendar size={16} className="text-accent" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-accent">
                        <Award size={16} />
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

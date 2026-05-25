import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  Award, 
  HeartHandshake, 
  X, 
  Printer, 
  ExternalLink, 
  FileText, 
  CheckCircle, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { experience, volunteering, credentials } from '../constants';

const Experience = () => {
  const [selectedCredential, setSelectedCredential] = useState<typeof credentials[0] | null>(null);

  const getEmbedUrl = (url: string) => {
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const handleOpenDoc = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.print();
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-foreground/[0.02]">
      {/* Background elements */}
      <div className="absolute top-[40%] -left-80 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Work Experience Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-display">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-accent/20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent shadow shadow-accent/50" />
              
              <div className="glass p-8 rounded-2xl relative transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/[0.02]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-bold">
                      <Calendar size={16} className="text-accent" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/75 leading-relaxed text-sm">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Offer Letter button for Research Intern */}
                {exp.role.toLowerCase().includes('research') && (
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-foreground/5">
                    <button
                      onClick={() => setSelectedCredential(credentials[0])}
                      className="px-5 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs font-bold transition-all hover:opacity-90 flex items-center gap-2 shadow-md shadow-accent/15"
                    >
                      <FileText size={14} />
                      <span>View Research Internship Offer Letter</span>
                    </button>
                    <a
                      href={credentials[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs font-bold transition-all border border-foreground/10 flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      <span>Drive Link</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dual Grid: Volunteering & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto pt-8">
          
          {/* Volunteering Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent border border-accent/15">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">Volunteering Contributions</h3>
                <p className="text-xs text-foreground/50">Active non-profit and community support</p>
              </div>
            </div>

            <div className="space-y-4">
              {volunteering.map((volunteer, idx) => (
                <motion.div
                  key={volunteer.role + idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl border border-foreground/10 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{volunteer.role}</h4>
                      <p className="text-sm text-accent font-medium">{volunteer.organization}</p>
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider bg-accent/5 text-accent border border-accent/10 px-2.5 py-1 rounded-full uppercase">
                      {volunteer.period}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/60 leading-relaxed font-sans">
                    {volunteer.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Verification & Credentials Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent border border-accent/15">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">Academic Credentials &amp; Awards</h3>
                <p className="text-xs text-foreground/50">Verified active scholarship &amp; placement records</p>
              </div>
            </div>

            <div className="space-y-4">
              {credentials.map((cred, idx) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedCredential(cred)}
                  className="glass p-6 rounded-2xl border border-foreground/10 hover:border-accent/40 cursor-pointer group transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <div className="p-3 rounded-xl bg-accent/5 text-accent border border-accent/10 group-hover:scale-110 transition-transform">
                      {cred.type === 'Letter' ? <FileText size={20} /> : <Award size={20} />}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-accent font-bold block mb-1">
                        {cred.issuer}
                      </span>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors line-clamp-1">
                        {cred.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[11px] text-foreground/45">{cred.date}</span>
                        <div className="w-1 h-1 rounded-full bg-foreground/20" />
                        <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                          <CheckCircle size={10} />
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>

            {/* Extra Drive Link for Certification Box */}
            <div className="p-6 rounded-2xl bg-accent/[0.03] border border-accent/10 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="font-bold text-sm">Need verification credentials?</h4>
                <p className="text-xs text-foreground/60 mt-1">Directly view and download institutional Drive documents securely.</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://drive.google.com/file/d/14tfvKvrpIkGbhTsH35ukUhFerKaPwvzu/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent text-accent-foreground text-xs font-bold rounded-lg transition-all hover:opacity-90 flex items-center gap-1.5"
                >
                  <Award size={13} />
                  <span>View Award</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/19PR6oocmkHWikQmK9pcWrow0IWQiuWAU/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground text-xs font-bold rounded-lg transition-all flex items-center gap-1.5"
                >
                  <FileText size={13} />
                  <span>Offer Letter</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Immersive Academic & Placement Document Viewer Modals */}
      <AnimatePresence>
        {selectedCredential && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCredential(null)}
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
            />
            {/* Modal Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-neutral-100"
            >
              {/* Toolbar Bar */}
              <div className="bg-neutral-950 px-6 py-4 border-b border-neutral-800 flex items-center justify-between no-print">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-accent/10 text-accent">
                    {selectedCredential.type === 'Letter' ? <FileText size={18} /> : <Award size={18} />}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-accent uppercase block">
                      SECURE DOCUMENT CLIENT — VERIFIED
                    </span>
                    <h4 className="text-sm font-bold text-neutral-100">{selectedCredential.title}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-bold transition-all hover:opacity-90 flex items-center gap-1.5 shadow-md shadow-accent/15"
                    title="Print Document"
                  >
                    <Printer size={14} />
                    <span>Print Record</span>
                  </button>
                  <button
                    onClick={() => setSelectedCredential(null)}
                    className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Status Header Block */}
              <div className="px-8 py-4 bg-neutral-950/40 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-neutral-400">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Placement Identification:</span>
                  <span className="font-mono text-neutral-200 text-[11px] bg-neutral-800 px-2 py-0.5 rounded">
                    {selectedCredential.id}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase flex items-center gap-1">
                    ✓ SECURE CLOUD LINK
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-[10px] uppercase">
                    ISSUED {selectedCredential.date}
                  </span>
                </div>
              </div>

              {/* Document Embed Area */}
              <div className="flex-grow bg-neutral-950 relative h-[65vh] min-h-[450px]">
                <iframe
                  src={getEmbedUrl(selectedCredential.url)}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay"
                  title={selectedCredential.title}
                />
              </div>

              {/* Action Buttons Toolbar Footer */}
              <div className="bg-neutral-950 px-6 py-4 border-t border-neutral-800 flex justify-between items-center gap-4 no-print">
                <p className="text-[11px] text-neutral-400">
                  Can't view content correctly? Securely open the Drive host.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenDoc(selectedCredential.url)}
                    className="px-5 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs font-bold transition-all hover:opacity-90 flex items-center gap-1.5"
                  >
                    <ExternalLink size={14} />
                    <span>Open in Google Drive</span>
                  </button>
                  <button
                    onClick={() => setSelectedCredential(null)}
                    className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold transition-all"
                  >
                    Close Document
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Experience;

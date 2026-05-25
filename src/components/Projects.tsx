import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  X, 
  Printer, 
  Mail, 
  FileText, 
  CheckCircle, 
  Bookmark, 
  BookOpen, 
  ChevronRight, 
  Cpu, 
  Sparkles, 
  Activity,
  Globe2,
  Briefcase
} from 'lucide-react';
import { projects } from '../constants';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showAcceptance, setShowAcceptance] = useState(false);
  const [showPaper, setShowPaper] = useState(false);

  const handleCustomButtonClick = (btn: { label: string; url?: string; action?: string; variant?: string }, e: React.MouseEvent) => {
    e.stopPropagation();
    if (btn.url) {
      window.open(btn.url, '_blank', 'noopener,noreferrer');
    } else if (btn.action === 'view_acceptance') {
      setShowAcceptance(true);
    } else if (btn.action === 'view_paper') {
      setShowPaper(true);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-[30%] -right-80 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] -left-80 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-display">Featured Systems &amp; Research</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm">
            Discover industrial-grade IoT deployments, real-time wireless monitoring instrumentation, and peer-reviewed deep learning research.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  setSelectedProject(project);
                }}
                className="glass glass-hover rounded-2.5xl overflow-hidden cursor-pointer group flex flex-col h-full border border-foreground/10"
              >
                <div className="relative overflow-hidden aspect-video border-b border-foreground/5 bg-slate-900 flex items-center justify-center">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-background/85 backdrop-blur-md text-accent border border-accent/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {project.category}
                  </span>

                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 p-6 text-center">
                    <span className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-accent/25 hover:scale-105 transition-transform flex items-center gap-1.5">
                      <Sparkles size={14} />
                      View Project Details
                    </span>
                    <p className="text-xs text-foreground/50 max-w-xs">
                      Explore academic background, specifications, and live demonstrations
                    </p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-1">{project.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-accent/5 rounded-md text-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {project.company && (
                      <div className="flex items-center gap-2 text-[11px] font-bold text-accent mb-6 bg-accent/[0.04] border border-accent/10 px-3 py-1.5 rounded-xl w-fit">
                        <Briefcase size={11} className="text-accent" />
                        <span>Worked with {project.company}</span>
                      </div>
                    )}
                  </div>

                  {/* Immediate Action Buttons (no GitHub as requested) */}
                  <div className="flex flex-col gap-2 mt-auto">
                    {project.customButtons?.map((btn) => (
                      <button
                        key={btn.label}
                        onClick={(e) => handleCustomButtonClick(btn, e)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          btn.variant === 'success' 
                            ? 'bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-500 border border-emerald-500/20' 
                            : btn.variant === 'accent'
                            ? 'bg-accent text-accent-foreground shadow-sm hover:opacity-90'
                            : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/10'
                        }`}
                      >
                        {btn.label === "Live Web App (24/7 Live)" && <Globe2 size={14} />}
                        {btn.label === "Springer Letter of Acceptance" && <Mail size={14} />}
                        {btn.label === "Read Accepted Research Paper" && <FileText size={14} />}
                        {btn.label === "Interactive Google Colab Demo" && <ExternalLink size={14} />}
                        {btn.label}
                        <ChevronRight size={12} className="opacity-60" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Main Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden shadow-2xl border border-foreground/10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-background/80 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative bg-slate-900 flex items-center justify-center">
                  <img
                    src={selectedProject.thumbnailUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover aspect-video md:aspect-square"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:hidden" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight line-clamp-2">{selectedProject.title}</h3>
                    
                    {selectedProject.company && (
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-accent mb-6 bg-accent/[0.04] border border-accent/15 px-3 py-1.5 rounded-full">
                        <Briefcase size={12} className="text-accent" />
                        <span>Worked with {selectedProject.company}</span>
                      </div>
                    )}
                    
                    <div className="space-y-4 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Technical Overview</h4>
                      <p className="text-foreground/75 leading-relaxed text-sm">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40">System Architecture Properties</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Action buttons list in modal details */}
                    {selectedProject.customButtons?.map((btn) => (
                      <button
                        key={btn.label}
                        onClick={(e) => {
                          handleCustomButtonClick(btn, e);
                          setSelectedProject(null); // auto-close principal modal to reveal detail screen
                        }}
                        className={`w-full py-4 px-6 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:scale-[1.01] ${
                          btn.variant === 'success' 
                            ? 'bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-400 border border-emerald-500/20' 
                            : btn.variant === 'accent'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/15'
                        }`}
                      >
                        {btn.label === "Live Web App (24/7 Live)" && <Globe2 size={16} />}
                        {btn.label === "Springer Letter of Acceptance" && <Mail size={16} />}
                        {btn.label === "Read Accepted Research Paper" && <BookOpen size={16} />}
                        {btn.label === "Interactive Google Colab Demo" && <ExternalLink size={16} />}
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Springer Acceptance Letter - Email Client Simulation */}
      <AnimatePresence>
        {showAcceptance && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAcceptance(false)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col text-neutral-200"
            >
              {/* Email Client Header Bar */}
              <div className="bg-neutral-950 px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-accent-foreground/5 text-accent border border-accent/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent tracking-widest uppercase block">Springer ICCCNet 2026</span>
                    <h4 className="text-sm font-bold text-neutral-100">Official Acceptance Record</h4>
                  </div>
                </div>
                <button
                  onClick={() => setShowAcceptance(false)}
                  className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Email Headers Info */}
              <div className="px-8 py-5 bg-neutral-950/50 border-b border-neutral-800 space-y-2 text-xs text-neutral-400">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-neutral-300">From: </span>
                    <span>Microsoft CMT &lt;<span className="text-accent">noreply@msr-cmt.org</span>&gt;</span>
                  </div>
                  <span className="text-[11px] bg-neutral-800 px-2.5 py-1 rounded-md text-neutral-300">Fri, May 1, 2026 at 2:17 PM (UTC)</span>
                </div>
                <div>
                  <span className="font-semibold text-neutral-300">To: </span>
                  <span>nizamkhan5049@gmail.com</span>
                </div>
                <div>
                  <span className="font-semibold text-neutral-300">Subject: </span>
                  <span className="text-amber-400 font-medium">Early Bird Registration Deadline Extended for ICCCNet 2026 Paper ID 676</span>
                </div>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                    ✓ VERIFIED ACCEPTANCE
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-[10px]">
                    TOP 20% OF PEER REVIEWED PAPERS
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold text-[10px]">
                    SPRINGER LNNS SERIES INDEXATION
                  </span>
                </div>
              </div>

              {/* Email Content Body */}
              <div className="p-8 overflow-y-auto leading-relaxed text-sm text-neutral-300 space-y-4 font-sans bg-neutral-900/60 flex-grow">
                <p className="font-semibold text-neutral-100">Dear Author(s),</p>
                
                <p>
                  ICCCNet-2026 team congratulates you that your paper with submission <strong className="text-accent font-medium">ID 676</strong> and Title <strong className="text-neutral-100">"Design and Development of a Portable WiFi-based Real-time ADC Monitoring System Using ESP32"</strong> has been accepted for publication in the proceedings of ICCCNet-2026 being published in <strong className="text-emerald-400 font-medium">Springer LNNS series</strong> indexed by <strong className="font-semibold">SCOPUS, WoS, EI, DBLP</strong> and many more databases.
                </p>

                <p className="bg-amber-500/10 border-l-4 border-amber-500/80 p-4 rounded-r-xl text-neutral-200">
                  This acceptance means that your paper is among the <strong className="text-amber-400">top 20% of the papers</strong> received and peer-reviewed.
                </p>

                <p>
                  Early bird registration deadline has been extended to <strong className="text-neutral-100">15th May 2026</strong>.
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-800">
                  <p className="font-semibold text-neutral-100 text-xs uppercase tracking-wider text-neutral-400">Next Action Deliverables:</p>
                  <ul className="list-decimal list-inside space-y-1 text-xs text-neutral-300">
                    <li>Final Camera-Ready Copy (CRC) as per the Springer format templates.</li>
                    <li>Plagiarism similarity content verified &lt; 15% and AI similarity &lt; 5%.</li>
                    <li>Copy of e-receipt of registration fees.</li>
                    <li>Submit the camera-ready copy via Microsoft CMT.</li>
                  </ul>
                </div>

                <div className="pt-6 text-neutral-400 text-xs border-t border-neutral-800">
                  <p className="font-semibold text-neutral-300">With Regards,</p>
                  <p className="font-bold text-accent">Conference Chair</p>
                  <p>International Conference on Computing &amp; Communication Networks (ICCCNet-2026)</p>
                </div>
              </div>

              {/* Email Client Footer */}
              <div className="bg-neutral-950 px-6 py-4 border-t border-neutral-800 flex justify-end gap-3 no-print">
                <button
                  onClick={() => setShowAcceptance(false)}
                  className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold transition-all"
                >
                  Close Record
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Accepted Research Paper - Professional Interactive Reader & Print View */}
      <AnimatePresence>
        {showPaper && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaper(false)}
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden h-[92vh] flex flex-col text-slate-100"
            >
              {/* Header Panel */}
              <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between no-print">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-accent/10 text-accent">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent tracking-widest uppercase block">IEEE / SPRINGER COMPLIANT MODEL (PREPRINT)</span>
                    <h4 className="text-sm font-bold text-slate-100">ICCCNet-2026 Peer-Reviewed Conference Paper</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-bold transition-all hover:opacity-90 flex items-center gap-1.5 shadow-md shadow-accent/15"
                    title="Print Research Paper"
                  >
                    <Printer size={14} />
                    <span>Print Paper / Save PDF</span>
                  </button>
                  <button
                    onClick={() => setShowPaper(false)}
                    className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Printable Area Wrapper */}
              <div 
                id="academic-print-area" 
                className="overflow-y-auto p-6 sm:p-12 md:p-16 flex-grow bg-slate-950 text-slate-100 selection:bg-accent/30 font-sans"
              >
                {/* Print Layout Injector Style */}
                <style dangerouslySetInnerHTML={{ __html: `
                  @media print {
                    header, footer, nav, button, .no-print {
                      display: none !important;
                    }
                    body {
                      background: white !important;
                      color: black !important;
                      margin: 0 !important;
                      padding: 0 !important;
                    }
                    #academic-print-area {
                      background: white !important;
                      color: black !important;
                      position: absolute !important;
                      left: 0 !important;
                      top: 0 !important;
                      width: 100% !important;
                      padding: 1.5in !important;
                      font-family: "Times New Roman", Times, serif !important;
                      line-height: 1.55 !important;
                    }
                    h1, h2, h3, h4, strong {
                      color: black !important;
                      font-family: "Times New Roman", Times, serif !important;
                    }
                    span, p, li, header, h1, h2, h3, h4 {
                      color: black !important;
                    }
                    .text-accent {
                      color: black !important;
                    }
                    .border-slate-800 {
                      border-color: #000000 !important;
                    }
                    .glass {
                      background: transparent !important;
                      border: 1px solid #000000 !important;
                      color: black !important;
                    }
                  }
                `}} />

                <div className="max-w-4xl mx-auto font-serif">
                  {/* Journal Title Indicator */}
                  <div className="text-center text-[10px] sm:text-xs font-sans text-accent uppercase tracking-widest font-bold pb-4 border-b border-slate-800/60 mb-10">
                    Proceedings of the Springer LNNS Series — ICCCNet 2026 // Submission ID: 676
                  </div>

                  {/* Document Title */}
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-50 text-center leading-snug tracking-tight mb-8">
                    Design and Development of a Portable WiFi-based Real-time ADC Monitoring System Using ESP32
                  </h1>

                  {/* Authors Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-center text-center text-slate-300 font-sans text-[11px] sm:text-xs mb-10 border-b border-b-slate-800/40 pb-8">
                    <div>
                      <h5 className="font-bold text-slate-100 text-sm">Dr. Ahmad Nasrul Bin Norali</h5>
                      <p className="text-slate-400 mt-1">Faculty of Electronic Eng. Technology</p>
                      <p className="text-slate-400">Universiti Malaysia Perlis</p>
                      <p className="text-slate-500 italic mt-1">Perlis, Malaysia</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-100 text-sm">C. Shyamala Kumari</h5>
                      <p className="text-slate-400 mt-1">Assist. Professor, Dept. of CSE</p>
                      <p className="text-slate-400">Vel Tech R&amp;D Institute of Sci. &amp; Tech.</p>
                      <p className="text-slate-500 italic mt-1">Chennai, India</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-100 text-sm">K. U. Karthikeya</h5>
                      <p className="text-slate-400 mt-1">Department of CSE</p>
                      <p className="text-slate-400">Vel Tech R&amp;D Institute of Sci. &amp; Tech.</p>
                      <p className="text-slate-500 italic mt-1">Chennai, India</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-100 text-sm">M. Nizam Khan</h5>
                      <p className="text-slate-400 mt-1">Department of CSE</p>
                      <p className="text-slate-400">Vel Tech R&amp;D Institute of Sci. &amp; Tech.</p>
                      <p className="text-slate-500 italic mt-1">Chennai, India</p>
                    </div>
                  </div>

                  {/* Double Columns Layout block */}
                  <div className="space-y-8 leading-relaxed text-slate-300">
                    
                    {/* Abstract with custom block treatment */}
                    <div className="bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-10">
                      <h2 className="text-md font-sans font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Activity size={16} /> Abstract
                      </h2>
                      <p className="text-xs sm:text-sm font-sans leading-relaxed text-slate-200">
                        Real-time measurement of analog signal voltages forms an important aspect of development of embedded systems, laboratory experiments, and other monitoring applications in Internet-of-Things (IoT). Nevertheless, current measurement tools such as oscilloscope and data acquisition devices prove to be costly and bulky. As a solution to this problem, this project aims to design and develop a portable WiFi-enabled real-time ADC monitoring system using the ESP32 microcontroller. This system is capable of digitizing input signals between the voltage levels of 0 to 3.3 volts using a 12-bit Analog-to-Digital Converter (ADC) built into the ESP32 device. The microcontroller functions as a standalone web and WebSocket server to transmit live wave telemetry to web browser interfaces. This eliminates the need for compiling additional applications on host clients. Experimental results confirm that the data collection and wave visualization process is consistent, fast, and accessible across all tested platforms.
                      </p>
                      <div className="mt-4 pt-4 border-t border-slate-800 flex gap-2">
                        <span className="font-sans text-[10px] font-bold text-slate-400">Index Terms — </span>
                        <span className="font-sans text-[10px] text-slate-300">ESP32, Real-Time ADC, WebSocket Streaming, Portable Instrumentation, RMS Analysis, Embedded Systems.</span>
                      </div>
                    </div>

                    {/* Section I */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-slate-100 border-b border-slate-800/40 pb-1 font-sans uppercase tracking-wide">
                        I. Introduction
                      </h2>
                      <p className="text-sm">
                        In contemporary electronic engineering, real-time capture and display of analog signals constitute basic needs for various applications, including embedded systems diagnostics, laboratory experimentation, and Internet of Things (IoT) monitoring systems. To analyze system performance and evaluate fault indicators dynamically, engineers require access to precise measurements directly from target networks.
                      </p>
                      <p className="text-sm">
                        While conventional measuring devices (e.g. scopes, complex desktop DAQ nodes) operate effectively, they remain highly capital-intensive, stationary, and lack native wireless capabilities.
                      </p>
                      <p className="text-sm">
                        Modern advances in system-on-chip (SoC) architectures present powerful, lightweight alternatives. The ESP32 microcontroller, incorporating a built-in 12-bit ADC and integrated 802.11 b/g/n WiFi module, serves as a premium basis for custom, portable wireless monitoring systems. However, standard methodologies remain confined to terminal serial logging or high-latency HTTP request-response architectures. This paper introduces an alternative multi-threaded WebSocket approach that achieves continuous signal plotting paired with on-device parameter analysis.
                      </p>
                    </div>

                    {/* Section II */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-slate-100 border-b border-slate-800/40 pb-1 font-sans uppercase tracking-wide">
                        II. Literature Study
                      </h2>
                      <p className="text-sm">
                        Researchers have conceptualized various microcontroller-based telemetry solutions to collect and visualize mechanical and electrical metrics [1]. Frequently, standard web integrations utilize HTTP-post actions or MQTT queues. However, research reveals that such solutions update data values sequentially rather than offering continuous true real-time streaming [2].
                      </p>
                      <p className="text-sm">
                        To resolve latency overheads, recent focus shifted towards WebSocket-based frameworks [3]. While WebSockets minimize transport delays, existing models typically transmit unprocessed, raw binary floats without on-device mathematical computation. Furthermore, systems frequently utilize fixed, hardcoded access point credentials in firmware scripts, which severely limits field portability across dynamic WiFi networks [4]. Combining high-speed sampling, on-chip signal processing (RMS/Peak-to-Peak calculations), captive configuration setups, and low-latency browser visualizations remains a significant engineering challenge.
                      </p>
                    </div>

                    {/* Section III */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-slate-100 border-b border-slate-800/40 pb-1 font-sans uppercase tracking-wide">
                        III. System Architecture
                      </h2>
                      <p className="text-sm">
                        The suggested system combines four architectural layers into a single hardware footprint:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 text-sm pl-4">
                        <li><strong>Sensing Layer:</strong> A function generator feeds analog waveform signals within the safe operating range (0 to 3.3V) to GPIO Pin 34 of the ESP32.</li>
                        <li><strong>Embedded Processing Layer:</strong> The ESP32's fast successive-approximation register (SAR) ADC samples electrical values up to 4096 levels (12-bit resolution), executing embedded calculations for Root Mean Square (RMS) and Peak-to-Peak (P2P) parameters in real-time.</li>
                        <li><strong>Communication Layer:</strong> Built-in dual-core processor executes standard Web Server (Port 80) and raw WebSocket daemon (Port 81) tasks simultaneously.</li>
                        <li><strong>Visualization Layer:</strong> A browser-based Dashboard uses non-blocking JavaScript paired with Chart.js to scale, draw, and update the left-scrolling waveform telemetry streaming over localized WebSockets.</li>
                      </ul>
                    </div>

                    {/* Section IV */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-slate-100 border-b border-slate-800/40 pb-1 font-sans uppercase tracking-wide">
                        IV. Methodology
                      </h2>
                      <p className="text-sm">
                        Operation begins with systemic calibration of the ADC1 block to ensure linear responses across voltages. When the ESP32 executes its loop cycle, continuous analog voltage samples are cached inside an internal ring buffer. Sub-routines periodically ingest this array to evaluate active peak ceilings and compute Root Mean Square values locally:
                      </p>
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs text-accent my-4">
                        RMS = sqrt( (1 / N) * sum( V_sample[i] ^ 2 ) )
                      </div>
                      <p className="text-sm">
                        Processed data frames, bundle containing the raw digitized waveforms alongsidecomputed parameters, are serialized into optimized textual packets. To optimize communication throughput, these packets are pushed directly to host clients using non-blocking WebSocket broadcasts.
                      </p>
                    </div>

                    {/* Section V */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-slate-100 border-b border-slate-800/40 pb-1 font-sans uppercase tracking-wide">
                        V. Implementation &amp; Hardware Setup
                      </h2>
                      <p className="text-sm">
                        Implementation utilizes Espressif's hardware frameworks. A crucial element of field usability is the network provisioning step. Rather than embedding persistent target router credentials, the ESP32 invokes the WiFiManager module on initialization if previously saved details are inaccessible.
                      </p>
                      <p className="text-sm border-l-2 border-accent pl-4 text-slate-400 italic">
                        "The device instantiates an independent Captive AP Portal. Users connect via their terminal or phone to provision active Local Area Network credentials directly, enabling instant field deployment."
                      </p>
                      <p className="text-sm">
                        Post-connection, the system launches its dual-server thread. The internal server listens on standard TCP Port 80, dispatching minimal HTML, CSS and Chart.js code to the browser client. Subsequently, the client instantiates a client-socket handshake back to ESP32 on port 81, opening the pipeline for live waveform streaming.
                      </p>
                    </div>

                    {/* Section VI */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-slate-100 border-b border-slate-800/40 pb-1 font-sans uppercase tracking-wide">
                        VI. Results &amp; Discussion
                      </h2>
                      <p className="text-sm">
                        The performance of the setup was verified by feeding standard 50 Hz sine and square waves generated externally by a precise source. On hook-up, the web visualizer resolved waveforms cleanly across dynamic scales. Y-axis values adjusted coordinate boundaries autonomously corresponding to varying voltage levels.
                      </p>
                      <p className="text-sm">
                        Thanks to embedded calculation, local computers do not have to perform intensive calculations. Testing validated that WebSockets held consistent transfer loops with negligible dropouts under long-term active tests (exceeding 24 hours of nonstop cycles), validating the robustness of the system.
                      </p>
                    </div>

                    {/* Section VII - Reference citation matches */}
                    <div className="space-y-3 pt-6 border-t border-slate-800">
                      <h2 className="text-md font-sans font-bold text-slate-400 uppercase tracking-widest mb-4">
                        References
                      </h2>
                      <ol className="list-decimal list-inside space-y-2 text-xs text-slate-400 font-sans">
                        <li>A. Al-Fuqaha, M. Guizani, M. Mohammadi, M. Aledhari, and M. Ayyash, "Internet of Things: A survey on enabling technologies, protocols, and applications," <em>IEEE Communications Surveys &amp; Tutorials</em>, vol. 17, no. 4, pp. 2347-2376, 2015.</li>
                        <li>L. Da Xu, W. He, and S. Li, "Internet of Things in industries: A survey," <em>IEEE Transactions on Industrial Informatics</em>, vol. 10, no. 4, pp. 2233-2243, 2014.</li>
                        <li>A. Banks and R. Gupta, "MQTT Version 3.1.1," OASIS Standard, 2014.</li>
                        <li>Espressif Systems, <em>ESP32 Technical Reference Manual</em>, Espressif Systems, 2022.</li>
                        <li>J. He and Y. Sun, "Design of an embedded web server based on ESP32 for real-time monitoring applications," in <em>Proc. IEEE Int. Conf. Smart Computing</em>, 2020, pp. 245-250.</li>
                      </ol>
                    </div>

                  </div>
                </div>
              </div>

              {/* Action Buttons Footer Panel */}
              <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-end gap-3 no-print">
                <button
                  onClick={() => setShowPaper(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;

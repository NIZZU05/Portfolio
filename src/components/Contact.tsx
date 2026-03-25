import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, socials } from '../constants';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form data:', formState);
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      console.log('Server response data:', data);

      if (response.ok) {
        console.log('Form submission successful!');
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        console.error('Form submission failed:', data.error);
        setError(data.error || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error('Network error during form submission:', err);
      setError('An unexpected error occurred. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
    
    setTimeout(() => {
      setIsSent(false);
      setError(null);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl font-bold mb-6 font-display">Get in <span className="text-accent">Touch</span></h2>
            <p className="text-foreground/70 mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl glass text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Email Me</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl glass text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Location</p>
                  <p className="font-medium">India / Remote</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass hover:border-accent transition-all hover:text-accent"
                  title={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="glass glass-hover p-8 md:p-12 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSent ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
              {isSent && (
                <p className="text-green-500 text-sm font-bold text-center mt-4 bg-green-500/10 py-2 rounded-lg border border-green-500/20">
                  Message Sent Successfully!
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm font-bold text-center mt-4 bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                  {error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { personalInfo } from '../constants';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-foreground/40 text-sm font-medium">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-foreground/40 hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-foreground/40 hover:text-accent transition-colors">Terms of Service</a>
        </div>
        <p className="text-foreground/40 text-sm font-medium">
          Built with <span className="text-accent">React</span> & <span className="text-accent">Tailwind</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

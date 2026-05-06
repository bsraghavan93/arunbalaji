import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="absolute inset-0 bg-[#050810]" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-400/4 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left */}
          <div>
            <motion.h2
              className="font-display font-bold text-3xl md:text-4xl text-[#f0f4ff] mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's Build Something
              <br />
              <span className="gradient-text">Remarkable</span>
            </motion.h2>
            <p className="text-[#8899bb] text-sm max-w-sm leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          {/* Right: contact details */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors">
                <Mail size={16} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-[#445577] font-mono text-xs mb-0.5">Email</div>
                <div className="text-[#f0f4ff] text-sm group-hover:text-cyan-400 transition-colors">{profile.email}</div>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#4f87ff]/10 border border-[#4f87ff]/20 group-hover:border-[#4f87ff]/50 transition-colors">
                <Phone size={16} className="text-[#4f87ff]" />
              </div>
              <div>
                <div className="text-[#445577] font-mono text-xs mb-0.5">Phone</div>
                <div className="text-[#f0f4ff] text-sm group-hover:text-[#4f87ff] transition-colors">{profile.phone}</div>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#7c3aed]/10 border border-[#7c3aed]/20 group-hover:border-[#7c3aed]/50 transition-colors">
                <Linkedin size={16} className="text-[#7c3aed]" />
              </div>
              <div>
                <div className="text-[#445577] font-mono text-xs mb-0.5">LinkedIn</div>
                <div className="text-[#f0f4ff] text-sm group-hover:text-[#7c3aed] transition-colors">arun-balaji-ravichandran</div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-[#1a2540] mb-8" />
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display font-semibold text-[#f0f4ff] text-sm">{profile.name}</p>
            <p className="text-[#445577] font-mono text-xs mt-0.5">© 2025 · All rights reserved</p>
          </div>

          <motion.button
            onClick={scrollTop}
            className="w-10 h-10 rounded-lg flex items-center justify-center glass border border-[#1a2540] hover:border-cyan-400/30 hover:text-cyan-400 text-[#445577] transition-all"
            whileHover={{ y: -3 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

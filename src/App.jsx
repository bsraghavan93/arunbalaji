import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Footer from './components/Footer';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#tech', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Impact' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#050810]/90 backdrop-blur-xl border-b border-[#1a2540]' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
              <Terminal size={14} className="text-cyan-400" />
            </div>
            <span className="font-display font-semibold text-sm text-[#f0f4ff] hidden sm:block">
              Arun<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link text-[#8899bb] hover:text-[#f0f4ff] font-body text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hire me */}
          <a
            href="mailto:arunbalaji1200@gmail.com"
            className="hidden md:flex btn-primary items-center gap-2 px-4 py-2 rounded-lg text-cyan-300 font-body text-sm"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#1a2540] text-[#8899bb] hover:text-[#f0f4ff] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#0a0f1e] border-l border-[#1a2540] p-8 pt-20"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 rounded-lg text-[#8899bb] hover:text-[#f0f4ff] hover:bg-[#1a2540]/40 font-body text-base transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="mailto:arunbalaji1200@gmail.com"
                  className="btn-primary flex items-center justify-center px-6 py-3 rounded-lg text-cyan-300 font-body text-sm w-full"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Achievements />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

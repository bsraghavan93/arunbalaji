import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
import { profile } from '../data/profile';

// Neural network canvas animation
function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let nodes = [];
    const NODE_COUNT = 60;
    const CONNECTION_DISTANCE = 130;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, `rgba(34, 211, 238, ${alpha})`);
            gradient.addColorStop(1, `rgba(79, 135, 255, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const glow = 0.6 + 0.4 * Math.sin(node.pulse);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${0.5 + 0.3 * glow})`;
        ctx.fill();

        // Glow ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 3 * glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${0.04 * glow})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
      style={{ pointerEvents: 'none' }}
    />
  );
}

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  }
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050810] via-[#070d1a] to-[#050810]" />

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4f87ff]/5 blur-[100px] pointer-events-none" />

      {/* Neural network */}
      <div className="absolute inset-0">
        <NeuralCanvas />
      </div>

      {/* Floating orbital rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-48 h-48 border border-cyan-400/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-28 right-28 w-32 h-32 border border-[#4f87ff]/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border border-cyan-400/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-20">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Terminal label */}
          <motion.div variants={stagger.item} className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
              <Terminal size={12} className="text-cyan-400" />
              <span className="section-label text-xs">Portfolio — 2025</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 font-mono text-xs">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={stagger.item}
            className="font-display font-bold leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            <span className="gradient-text">Arun Balaji</span>
            <br />
            <span className="text-[#f0f4ff]">Ravichandran</span>
          </motion.h1>

          {/* Roles ticker */}
          <motion.div variants={stagger.item} className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
            {profile.roles.map((role, i) => (
              <span key={i} className="flex items-center gap-2 text-[#8899bb] font-body text-base md:text-lg">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-cyan-400/40" />}
                {role}
              </span>
            ))}
          </motion.div>

          {/* Degree badge */}
          <motion.div variants={stagger.item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#4f87ff]/25 bg-[#4f87ff]/8 text-electric-400 font-mono text-sm">
              <span className="text-[#4f87ff]">◆</span>
              MS Computer Science · Florida Atlantic University
            </span>
          </motion.div>

          {/* Intro paragraph */}
          <motion.p
            variants={stagger.item}
            className="text-[#8899bb] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            {profile.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={stagger.item} className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="btn-primary flex items-center gap-2.5 px-6 py-3 rounded-lg font-body font-medium text-cyan-300 text-sm cursor-pointer"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2.5 px-6 py-3 rounded-lg font-body font-medium text-[#f0f4ff] text-sm"
            >
              <Linkedin size={16} />
              View LinkedIn
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2.5 px-6 py-3 rounded-lg font-body font-medium text-[#8899bb] text-sm border border-[#1a2540] bg-transparent hover:bg-[#1a2540]/40 hover:text-[#f0f4ff] transition-all duration-300"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={stagger.item}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
          >
            {[
              { n: '2+', l: 'Years XP' },
              { n: '95%', l: 'SLA Rate' },
              { n: '3+', l: 'AI Projects' },
              { n: 'FAU', l: 'MS CS' },
            ].map((s, i) => (
              <div key={i} className="glass rounded-lg px-4 py-3 border border-[#1a2540]">
                <div className="font-display font-bold text-xl gradient-text-cyan">{s.n}</div>
                <div className="text-[#445577] font-mono text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[#445577] font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-cyan-400/50" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
    </section>
  );
}

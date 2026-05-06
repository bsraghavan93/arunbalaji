import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Cpu, Music, Shield } from 'lucide-react';
import { projects } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const PROJECT_ICONS = [Cpu, Music, Shield];

function ProjectCard({ proj, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = PROJECT_ICONS[index] || Cpu;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay: index * 0.12 }}
      className="glass rounded-2xl p-7 card-hover border border-[#1a2540] relative overflow-hidden group flex flex-col"
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: proj.color + '18' }}
      />

      {/* Type badge + icon */}
      <div className="flex items-center justify-between mb-6">
        <span
          className="font-mono text-xs px-3 py-1.5 rounded-full border"
          style={{ color: proj.color, borderColor: `${proj.color}30`, background: `${proj.color}10` }}
        >
          {proj.type}
        </span>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${proj.color}12`, border: `1px solid ${proj.color}25` }}
        >
          <Icon size={18} style={{ color: proj.color }} />
        </div>
      </div>

      {/* Title */}
      <div className="mb-3">
        <h3 className="font-display font-bold text-xl text-[#f0f4ff] leading-tight">
          {proj.title}
        </h3>
        <p className="font-display text-lg" style={{ color: proj.color }}>
          {proj.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-[#8899bb] text-sm leading-relaxed mb-5 flex-1">
        {proj.description}
      </p>

      {/* Highlight */}
      <div
        className="flex items-start gap-2.5 rounded-lg px-4 py-3 mb-5 text-sm"
        style={{ background: `${proj.color}08`, border: `1px solid ${proj.color}18` }}
      >
        <span className="flex-shrink-0 mt-0.5" style={{ color: proj.color }}>✦</span>
        <span className="text-[#8899bb]">{proj.highlight}</span>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {proj.tech.map((t, i) => (
          <span
            key={i}
            className="font-mono text-xs px-2.5 py-1 rounded border"
            style={{ color: `${proj.color}99`, borderColor: `${proj.color}20`, background: `${proj.color}06` }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#070d1a]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/15 to-transparent" />

      {/* Glow */}
      <div className="absolute left-1/4 bottom-0 w-[400px] h-[300px] bg-[#22d3ee]/4 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="section-label block mb-3">04 — Projects</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#f0f4ff] mb-4">
              Built With Purpose
            </h2>
            <p className="text-[#8899bb] max-w-xl">
              From real-time fire detection using AI to music notation conversion — projects at the intersection of intelligent systems and practical engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <ProjectCard key={proj.id} proj={proj} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

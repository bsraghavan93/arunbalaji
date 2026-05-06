import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, TrendingUp, Brain, Layers, CheckCircle2 } from 'lucide-react';
import { achievements, highlights } from '../data/profile';

const ICONS = { Briefcase, TrendingUp, Brain, Layers };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

function StatCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const Icon = ICONS[item.icon] || Briefcase;
  const colors = ['#22d3ee', '#4f87ff', '#f59e0b', '#7c3aed'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-xl p-6 card-hover border border-[#1a2540] text-center group relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${color}06, transparent 70%)` }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
        style={{ background: `${color}12`, border: `1px solid ${color}25` }}
      >
        <Icon size={20} style={{ color }} />
      </div>
      <div
        className="font-display font-bold text-3xl mb-1"
        style={{ color }}
      >
        {item.stat}
      </div>
      <div className="text-[#8899bb] text-sm leading-snug">{item.label}</div>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a] to-[#050810]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />

      {/* Glow */}
      <div className="absolute right-0 top-1/2 w-64 h-64 bg-[#22d3ee]/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="section-label block mb-3">05 — Impact</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#f0f4ff] mb-4">
              By the Numbers
            </h2>
            <p className="text-[#8899bb] max-w-xl">
              Measurable engineering impact across production systems, enterprise clients, and AI research.
            </p>
          </motion.div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {achievements.map((item, i) => (
              <StatCard key={i} item={item} index={i} />
            ))}
          </div>

          {/* Highlights list */}
          <motion.div
            variants={fadeUp}
            className="glass rounded-2xl p-8 border border-[#1a2540] max-w-3xl"
          >
            <h3 className="font-display font-semibold text-xl text-[#f0f4ff] mb-6">
              Recruiter Highlights
            </h3>
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                >
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5 text-cyan-400" />
                  <span className="text-[#8899bb] text-sm leading-relaxed">{h}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, Monitor, Database, Brain, Wrench } from 'lucide-react';
import { techStack } from '../data/profile';

const ICONS = { Code2, Server, Monitor, Database, Brain, Wrench };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

function CategoryCard({ cat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = ICONS[cat.icon] || Code2;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay: index * 0.08 }}
      className="glass rounded-xl p-6 card-hover border border-[#1a2540] relative overflow-hidden group"
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{ background: `radial-gradient(circle at top left, ${cat.color}08, transparent 60%)` }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25` }}
        >
          <Icon size={16} style={{ color: cat.color }} />
        </div>
        <h3 className="font-display font-semibold text-sm text-[#f0f4ff]">{cat.category}</h3>
      </div>

      {/* Tech items */}
      <div className="flex flex-wrap gap-2">
        {cat.items.map((item, i) => (
          <motion.span
            key={i}
            className="tech-badge"
            style={{
              borderColor: `${cat.color}25`,
              color: `${cat.color}CC`,
              background: `${cat.color}08`,
            }}
            whileHover={{
              scale: 1.05,
              borderColor: `${cat.color}60`,
              color: cat.color,
              background: `${cat.color}15`,
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810] to-[#070d1a]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4f87ff]/15 to-transparent" />

      {/* Decorative element */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-[#7c3aed]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="section-label block mb-3">03 — Tech Stack</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#f0f4ff] mb-4">
              Tools of the Trade
            </h2>
            <p className="text-[#8899bb] max-w-xl">
              A full-spectrum engineering toolkit spanning backend systems, intelligent applications, and modern frontend interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((cat, i) => (
              <CategoryCard key={i} cat={cat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

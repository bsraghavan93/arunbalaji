import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Building2 } from 'lucide-react';
import { experience } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
};

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const isFirst = index === 0;
  const typeColor = isFirst ? '#22d3ee' : index === 1 ? '#4f87ff' : '#7c3aed';

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline indicator */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center z-10 border"
          style={{
            background: `${typeColor}15`,
            borderColor: `${typeColor}35`,
            boxShadow: `0 0 20px ${typeColor}20`
          }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <Briefcase size={16} style={{ color: typeColor }} />
        </motion.div>
        {index < experience.length - 1 && (
          <div className="w-px flex-1 mt-2" style={{ background: `linear-gradient(to bottom, ${typeColor}40, transparent)` }} />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-12">
        <div
          className="glass rounded-xl p-6 card-hover border border-[#1a2540] relative overflow-hidden"
        >
          {/* Accent bar */}
          <div
            className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
            style={{ background: `linear-gradient(to bottom, ${typeColor}, transparent)` }}
          />

          <div className="pl-2">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="font-display font-semibold text-lg text-[#f0f4ff] mb-1">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-[#8899bb] text-sm">
                  <Building2 size={13} style={{ color: typeColor }} />
                  <span>{exp.company}</span>
                  {exp.client && (
                    <>
                      <span className="text-[#445577]">/</span>
                      <span style={{ color: typeColor }}>{exp.client}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span
                  className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full border"
                  style={{ color: typeColor, borderColor: `${typeColor}30`, background: `${typeColor}08` }}
                >
                  <Calendar size={10} />
                  {exp.period}
                </span>
                <span className="font-mono text-xs text-[#445577] px-2.5 py-1 rounded-full border border-[#1a2540]">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Points */}
            <ul className="space-y-2.5 mb-5">
              {exp.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ChevronRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: typeColor }} />
                  <span className="text-[#8899bb] text-sm leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#070d1a]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#4f87ff]/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
            <span className="section-label block mb-3">02 — Experience</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#f0f4ff] mb-4">
              Production-Grade Engineering
            </h2>
            <p className="text-[#8899bb]">
              2+ years building and supporting enterprise systems at Cognizant, delivering reliable software for global clients including Bayer and VMware.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl">
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

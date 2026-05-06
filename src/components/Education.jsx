import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { education } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#070d1a]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/15 to-transparent" />

      <div className="absolute left-1/2 top-1/4 w-[400px] h-[400px] -translate-x-1/2 bg-[#4f87ff]/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="section-label block mb-3">06 — Education</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#f0f4ff] mb-4">
              Academic Foundation
            </h2>
            <p className="text-[#8899bb] max-w-xl">
              Combining professional engineering experience with graduate-level research in AI and intelligent systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {education.map((edu, i) => {
              const isCurrent = edu.status === 'current';
              const color = isCurrent ? '#22d3ee' : '#4f87ff';

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass rounded-2xl p-7 card-hover border border-[#1a2540] relative overflow-hidden group"
                >
                  {/* Glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `${color}10` }}
                  />

                  {/* Status badge */}
                  {isCurrent && (
                    <div className="flex items-center gap-1.5 mb-4">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-mono text-xs text-green-400">Currently Enrolled</span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    <GraduationCap size={22} style={{ color }} />
                  </div>

                  {/* Degree */}
                  <h3 className="font-display font-bold text-lg text-[#f0f4ff] mb-1 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="font-body text-sm mb-3" style={{ color }}>
                    {edu.school}
                  </p>

                  {/* Period */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <Calendar size={12} className="text-[#445577]" />
                    <span className="font-mono text-xs text-[#445577]">{edu.period}</span>
                  </div>

                  {/* Focus areas */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={13} style={{ color }} />
                      <span className="font-mono text-xs text-[#445577]">Focus Areas</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((f, j) => (
                        <span
                          key={j}
                          className="font-mono text-xs px-2.5 py-1 rounded border"
                          style={{ color: `${color}99`, borderColor: `${color}20`, background: `${color}06` }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

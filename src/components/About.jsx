import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { profile } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    { icon: GraduationCap, label: 'Education', value: 'MS CS — Florida Atlantic University', color: '#22d3ee' },
    { icon: Briefcase, label: 'Experience', value: '2+ Years at Cognizant', color: '#4f87ff' },
    { icon: MapPin, label: 'Location', value: 'Florida, USA', color: '#7c3aed' },
    { icon: User, label: 'Status', value: 'Open to Opportunities', color: '#10b981' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#070d1a] to-[#050810]" />

      {/* Decorative line */}
      <div className="absolute left-0 top-1/2 w-1/3 h-px bg-gradient-to-r from-transparent to-cyan-400/10" />
      <div className="absolute right-0 top-1/2 w-1/3 h-px bg-gradient-to-l from-transparent to-cyan-400/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="mb-16">
            <span className="section-label block mb-3">01 — About</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#f0f4ff]">
              The Engineer Behind the Code
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: text */}
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-[#8899bb] text-lg leading-relaxed">
                {profile.about}
              </p>

              <div className="h-px bg-gradient-to-r from-cyan-400/20 via-[#4f87ff]/20 to-transparent" />

              <div className="space-y-3">
                {[
                  "Enterprise Java & Spring Boot production engineer",
                  "Full-stack experience across backend, APIs, and React UI",
                  "Computer vision with CNN and YOLOv3 for real-world systems",
                  "Graduate research in ML, deep learning, and NLP",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-[#8899bb] text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Email CTA */}
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 mt-2 text-sm font-mono text-cyan-400 border-b border-cyan-400/30 pb-0.5 hover:border-cyan-400 transition-colors"
              >
                {profile.email} →
              </motion.a>
            </motion.div>

            {/* Right: info cards */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass rounded-xl p-5 card-hover border border-[#1a2540]"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}25` }}
                  >
                    <card.icon size={18} style={{ color: card.color }} />
                  </div>
                  <div className="text-[#445577] font-mono text-xs mb-1">{card.label}</div>
                  <div className="text-[#f0f4ff] font-body text-sm font-medium">{card.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

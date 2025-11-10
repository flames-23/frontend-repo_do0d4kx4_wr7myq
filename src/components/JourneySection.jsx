import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: '2018',
    title: 'Hello World',
    text: 'Wrote my first lines of code and got obsessed with making things move on screen.'
  },
  {
    year: '2020',
    title: 'Crafting UI',
    text: 'Discovered the joy of building reactive interfaces and learned modern frontend.'
  },
  {
    year: '2022',
    title: 'Full-Stack Leap',
    text: 'Shipped production apps, stitched services together, and embraced performance.'
  },
  {
    year: 'Now',
    title: 'Designing Experiences',
    text: 'Telling stories with code — immersive, accessible, and delightful.'
  }
];

const JourneySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" ref={ref} className="relative bg-[#0D0D0D] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.10),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,107,107,0.08),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <motion.h2
          style={{ filter: glow.to(v => `drop-shadow(0 0 ${Math.round(v * 12)}px rgba(0,255,255,0.6))`) }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Chapter 1: The Journey
        </motion.h2>
        <p className="mt-4 max-w-3xl text-[#B0B0B0]">
          A scroll-through timeline of milestones — each step a new lesson, every lesson a new power-up.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 text-cyan-300">
                <span className="text-sm uppercase tracking-widest text-cyan-400/80">{m.year}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
              </div>
              <h3 className="mt-3 text-2xl font-semibold">{m.title}</h3>
              <p className="mt-2 text-[#B0B0B0]">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

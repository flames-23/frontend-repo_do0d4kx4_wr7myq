import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0D0D0D] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 flex h-full w-full items-center px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-extrabold tracking-tight text-5xl md:text-7xl"
            style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
          >
            Hi, I’m Naufal — I build interactive software experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-[#B0B0B0]"
          >
            An immersive portfolio that unfolds like a story as you scroll. Crafted with React, motion, and a love for delightful interfaces.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#journey"
              className="rounded-full bg-cyan-400/90 px-6 py-3 text-black shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300"
            >
              Start the Journey
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/20 px-6 py-3 text-white/90 backdrop-blur-md transition hover:bg-white/10"
            >
              See the Creations
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

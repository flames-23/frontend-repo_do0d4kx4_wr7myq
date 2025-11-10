import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Motion Canvas',
    description: 'A lightweight animation toolkit for storytelling interfaces.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    link: 'https://github.com/'
  },
  {
    title: 'Realtime Collab',
    description: 'Multiplayer whiteboard with CRDT syncing and presence.',
    tech: ['WebRTC', 'Y.js', 'FastAPI'],
    link: 'https://github.com/'
  },
  {
    title: 'Visual Query',
    description: 'Drag-and-drop data explorer with AI-assisted insights.',
    tech: ['TypeScript', 'tRPC', 'Postgres'],
    link: 'https://github.com/'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative bg-[#0D0D0D] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,255,255,0.10),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(255,107,107,0.08),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Chapter 3: The Creations
        </motion.h2>
        <p className="mt-4 max-w-3xl text-[#B0B0B0]">
          Each build is a short story — focused, expressive, and engineered for speed.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <Github className="h-5 w-5 text-white/70 transition group-hover:text-white" />
              </div>
              <p className="mt-2 text-[#B0B0B0]">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

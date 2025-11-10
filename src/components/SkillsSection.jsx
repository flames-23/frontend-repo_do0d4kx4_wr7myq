import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Cloud } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    accent: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'FastAPI', 'GraphQL', 'PostgreSQL', 'MongoDB'],
    accent: 'from-emerald-400 to-cyan-500'
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'Vite', 'Webpack', 'Jest', 'Playwright', 'Storybook'],
    accent: 'from-fuchsia-400 to-rose-500'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    items: ['Vercel', 'Netlify', 'Docker', 'CI/CD'],
    accent: 'from-amber-300 to-pink-500'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative bg-[#0D0D0D] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_40%,rgba(0,255,255,0.10),transparent_40%),radial-gradient(circle_at_90%_60%,rgba(255,107,107,0.08),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Chapter 2: The Craft
        </motion.h2>
        <p className="mt-4 max-w-3xl text-[#B0B0B0]">
          A focused toolkit for building fast, accessible, and expressive experiences.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${group.accent} opacity-30 blur-2xl`} />
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <group.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-[#B0B0B0]">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const PhilosophyContact = () => {
  return (
    <section id="contact" className="relative bg-[#0D0D0D] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.12),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-white/90"
        >
          “Code is poetry. Interfaces are stories.”
        </motion.blockquote>
        <p className="mt-4 text-[#B0B0B0]">A philosophy that guides every build — clarity, empathy, and flow.</p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold">Let’s build something together</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form));
              const subject = encodeURIComponent('Let\'s Build Something Together');
              const body = encodeURIComponent(`Hi Naufal,%0D%0A%0D%0AMy name is ${data.name}. ${data.message}%0D%0A%0D%0AReach me at: ${data.email}`);
              window.location.href = `mailto:naufal@example.com?subject=${subject}&body=${body}`;
            }}
            className="mt-4 grid gap-4"
          >
            <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-[#121212] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-cyan-400" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-lg border border-white/10 bg-[#121212] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-cyan-400" />
            <textarea name="message" rows={4} required placeholder="Your message" className="w-full rounded-lg border border-white/10 bg-[#121212] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-cyan-400" />
            <button type="submit" className="inline-flex justify-center rounded-full bg-cyan-400/90 px-6 py-3 text-black shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300">
              Send Message
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white/80 hover:bg-white/10">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white/80 hover:bg-white/10">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="mailto:naufal@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white/80 hover:bg-white/10">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </motion.div>

        <p className="mt-16 text-sm text-white/50">© {new Date().getFullYear()} Naufal — Crafted with care.</p>
      </div>
    </section>
  );
};

export default PhilosophyContact;

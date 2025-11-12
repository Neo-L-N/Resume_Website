import React from 'react';
import { motion } from 'framer-motion';

export function About({ isDark }) {
  return (
    <section>
      <h2
        className={
          isDark
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 pb-2 border-b border-purple-800/30 text-2xl'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 pb-2 border-b border-purple-200 text-2xl'
        }
      >
        About
      </h2>
      <motion.p
        className={isDark ? 'text-zinc-300 leading-relaxed' : 'text-zinc-700 leading-relaxed'}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Technology Analyst at Accenture Federal Services specializing in Data and AI solutions for federal clients.
        Passionate about leveraging machine learning and artificial intelligence to build innovative applications that solve
        real-world problems. Experience spans full-stack development, data analytics, and strategic project management across
        government and private sectors.
      </motion.p>
    </section>
  );
}

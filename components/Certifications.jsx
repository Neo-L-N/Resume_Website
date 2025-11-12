import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    title: 'AWS AI Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    description: 'Professional certification in AWS AI and machine learning services',
  },
];

export function Certifications({ isDark }) {
  return (
    <section>
      <h2
        className={
          isDark
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 pb-2 border-b border-purple-800/30 text-2xl'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 pb-2 border-b border-purple-200 text-2xl'
        }
      >
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className={
              isDark
                ? 'p-4 rounded-lg bg-slate-900/50 border border-purple-800/30 backdrop-blur-sm'
                : 'p-4 rounded-lg bg-white border border-purple-200 shadow-sm'
            }
          >
            <div className="flex items-start gap-3">
              <motion.div
                className={
                  isDark
                    ? 'mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0'
                    : 'mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0'
                }
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-4 h-4 text-white" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className={isDark ? 'text-purple-300 text-sm' : 'text-purple-700 text-sm'}>{cert.title}</h4>
                  <span className={isDark ? 'text-xs text-zinc-400 flex-shrink-0' : 'text-xs text-zinc-500 flex-shrink-0'}>
                    {cert.date}
                  </span>
                </div>
                <p className={isDark ? 'text-zinc-300 text-sm mt-1' : 'text-zinc-800 text-sm mt-1'}>{cert.issuer}</p>
                <p className={isDark ? 'text-zinc-400 text-xs mt-2' : 'text-zinc-600 text-xs mt-2'}>{cert.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

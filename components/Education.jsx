import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    school: 'Florida International University',
    period: '2021 - 2024',
    details: 'Specialized in software development, data structures, and algorithms',
  },
];

export function Education({ isDark }) {
  return (
    <section>
      <h2
        className={
          isDark
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 pb-2 border-b border-purple-800/30 text-2xl'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 pb-2 border-b border-purple-200 text-2xl'
        }
      >
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="relative pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <motion.div
              className={
                isDark
                  ? 'absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center'
                  : 'absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center'
              }
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <GraduationCap className="w-3 h-3 text-white" />
            </motion.div>
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className={isDark ? 'text-purple-300' : 'text-purple-700'}>{edu.degree}</h3>
                <span className={isDark ? 'text-sm text-zinc-400' : 'text-sm text-zinc-500'}>{edu.period}</span>
              </div>
              <p className={isDark ? 'text-zinc-300' : 'text-zinc-800'}>{edu.school}</p>
              <p className={isDark ? 'text-zinc-400 text-sm' : 'text-zinc-600 text-sm'}>{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

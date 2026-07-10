import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { inkTheme } from './design';

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
  const theme = inkTheme(isDark);

  return (
    <section>
      <h2 className={theme.heading}>
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
              className={`absolute left-0 top-1 w-7 h-7 rounded-full border flex items-center justify-center ${theme.timelineDot}`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <GraduationCap className="w-3.5 h-3.5" />
            </motion.div>
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className={theme.subheading}>{edu.degree}</h3>
                <span className={`text-sm ${theme.muted}`}>{edu.period}</span>
              </div>
              <p className={theme.strong}>{edu.school}</p>
              <p className={`text-sm ${theme.muted}`}>{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

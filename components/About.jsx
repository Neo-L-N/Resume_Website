import React from 'react';
import { motion } from 'framer-motion';
import { inkTheme } from './design';

const highlights = [
  {
    label: 'Focus',
    value: 'Data + AI',
  },
  {
    label: 'Cloud',
    value: 'AWS',
  },
  {
    label: 'Domain',
    value: 'Federal',
  },
  {
    label: 'Strength',
    value: 'Applied ML',
  },
];

export function About({ isDark }) {
  const theme = inkTheme(isDark);

  return (
    <section>
      <h2 className={theme.heading}>
        About
      </h2>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className={`${theme.body} leading-relaxed text-lg`}>
          Technology Analyst at Accenture Federal Services focused on Data and AI solutions for federal clients. I work across
          machine learning, analytics, and AWS-based AI services to turn complex data into practical applications, dashboards,
          and decision support workflows.
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className={`rounded-lg border px-4 py-3 ${theme.rule}`}>
              <p className={`text-[0.68rem] font-bold uppercase tracking-[0.2em] ${theme.muted}`}>{item.label}</p>
              <p className={`mt-1 text-sm font-black ${theme.subheading}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

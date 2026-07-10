import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { inkTheme } from './design';

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
  const theme = inkTheme(isDark);

  return (
    <section>
      <h2 className={theme.heading}>
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
            className={`p-4 ${theme.card}`}
          >
            <div className="flex items-start gap-3">
              <motion.div
                className={`mt-1 w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 ${theme.timelineDot}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-4 h-4" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className={`text-sm ${theme.subheading}`}>{cert.title}</h4>
                  <span className={`text-xs flex-shrink-0 ${theme.muted}`}>
                    {cert.date}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${theme.strong}`}>{cert.issuer}</p>
                <p className={`text-xs mt-2 ${theme.muted}`}>{cert.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

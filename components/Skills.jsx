import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { inkTheme } from './design';

const skillCategories = [
  {
    id: 1,
    category: 'Programming Languages',
    skills: ['JavaScript', 'Java', 'Python', 'C', 'HTML', 'CSS', 'Bash'],
  },
  {
    id: 2,
    category: 'Cloud & AI Platforms',
    skills: ['AWS', 'S3', 'Glue', 'Lambda', 'SageMaker', 'EMR', 'QuickSight', 'OpenAI'],
  },
  {
    id: 3,
    category: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Next.JS', 'Spring Boot', 'Express.js', 'Socket.IO', 'TensorFlow', 'Pandas', 'NumPy'],
  },
  {
    id: 4,
    category: 'Tools & Technologies',
    skills: ['Git', 'Linux', 'MySQL', 'Postman', 'Matplotlib', 'Pygame', 'Data Analytics', 'Machine Learning'],
  },
];

export function Skills({ isDark }) {
  const theme = inkTheme(isDark);

  return (
    <section>
      <h2 className={theme.heading}>
        Skills
      </h2>
      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className={`mb-3 ${theme.subheading}`}>{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className={theme.chip}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

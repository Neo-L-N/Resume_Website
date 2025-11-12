import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    id: 1,
    category: 'Programming Languages',
    skills: ['JavaScript', 'Java', 'Python', 'C', 'HTML', 'CSS', 'Bash'],
  },
  {
    id: 2,
    category: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Next.JS', 'Spring Boot', 'Express.js', 'Socket.IO', 'TensorFlow', 'Pandas'],
  },
  {
    id: 3,
    category: 'Tools & Technologies',
    skills: ['Git', 'Linux', 'MySQL', 'Postman', 'NumPy', 'Matplotlib', 'Pygame', 'OpenAI'],
  },
];

export function Skills({ isDark }) {
  return (
    <section>
      <h2
        className={
          isDark
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 pb-2 border-b border-purple-800/30 text-2xl'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 pb-2 border-b border-purple-200 text-2xl'
        }
      >
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
            <h3 className={isDark ? 'text-purple-300 mb-3' : 'text-purple-700 mb-3'}>{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className={
                      isDark
                        ? 'bg-purple-900/30 text-purple-200 hover:bg-purple-900/50 border-purple-700/50'
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-300'
                    }
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

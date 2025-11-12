import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Technology Analyst',
    company: 'Accenture Federal Services (AFS)',
    period: 'Sep. 2025 - Present',
    description: 'Delivering innovative technology solutions to federal clients in Data and AI space',
    achievements: [
      'Enhanced operational efficiency and decision-making through advanced analytics',
      'Collaborated with cross-functional teams on complex federal projects',
    ],
  },
  {
    id: 2,
    title: 'Project Management Intern',
    company: 'National Nuclear Security Administration (NNSA)',
    period: 'Jun. 2023 - Aug. 2023',
    description: 'Led strategic initiatives and international collaboration projects',
    achievements: [
      'Spearheaded the creation of a project proposal, securing thousands in budget funds through comprehensive research and strategic planning',
      "Enhanced global radiological threat countermeasures by collaborating with cross-cultural teams on impactful international projects",
      "Advanced NNSA's diplomatic initiatives by participating in meetings with foreign dignitaries across Europe, Asia, and Latin America",
    ],
  },
  {
    id: 3,
    title: 'Computer Science Tutor',
    company: 'Florida International University (FIU)',
    period: 'Sep. 2022 - May 2023',
    description: 'Provided comprehensive tutoring in computer science fundamentals',
    achievements: [
      'Elevated the understanding of foundational coding principles among over a dozen students',
      'Utilized effective communication and teaching methods to improve student outcomes',
      'Developed customized learning materials for diverse learning styles',
    ],
  },
  {
    id: 4,
    title: 'Global Trade Compliance Intern',
    company: 'Boeing',
    period: 'Jun. 2022 - Aug. 2022',
    description: 'Ensured regulatory compliance in international trade operations',
    achievements: [
      'Ensured compliance in transactions worth hundreds of millions by meticulously cross-referencing databases',
      'Contributed to safeguarding company integrity through extensive research and verification of partner companies',
      'Demonstrated adaptability and efficiency working seamlessly with a partially remote team',
    ],
  },
];

export function Experience({ isDark }) {
  return (
    <section>
      <h2
        className={
          isDark
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 pb-2 border-b border-purple-800/30 text-2xl'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 pb-2 border-b border-purple-200 text-2xl'
        }
      >
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
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
              <Briefcase className="w-3 h-3 text-white" />
            </motion.div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className={isDark ? 'text-purple-300' : 'text-purple-700'}>{exp.title}</h3>
                <span className={isDark ? 'text-sm text-zinc-400' : 'text-sm text-zinc-500'}>{exp.period}</span>
              </div>
              <p className={isDark ? 'text-zinc-300' : 'text-zinc-800'}>{exp.company}</p>
              <p className={isDark ? 'text-zinc-400 text-sm' : 'text-zinc-600 text-sm'}>{exp.description}</p>
              <ul className="space-y-1 mt-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievement}
                    className={isDark ? 'text-zinc-300 text-sm flex gap-2' : 'text-zinc-700 text-sm flex gap-2'}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                  >
                    <span className={isDark ? 'text-purple-400' : 'text-purple-500'}>•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { inkTheme } from './design';

const experiences = [
  {
    id: 1,
    title: 'Technology Analyst',
    company: 'Accenture Federal Services (AFS)',
    period: 'Sep. 2025 - Present',
    description: 'Delivering cloud-based Data and AI solutions for federal clients within AWS environments',
    achievements: [
      'Worked across AWS services including S3, Glue, Lambda, SageMaker, EMR, and QuickSight to support data engineering, analytics, and machine learning workflows',
      'Built and maintained data pipelines using S3 for storage and AWS Glue for data cataloging, transformation, and ETL processing',
      'Supported model development and analytics use cases with SageMaker, EMR-based processing, and QuickSight dashboards for stakeholder reporting',
      'Collaborated with cross-functional teams to deliver secure, scalable cloud solutions for complex federal projects',
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
      "Advanced NNSA's security initiatives by participating in meetings with foreign teams across Europe, Asia, and Latin America",
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
  const theme = inkTheme(isDark);

  return (
    <section>
      <h2 className={theme.heading}>
        Experience
      </h2>
      <div className="space-y-8 border-l border-current/20 pl-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className={`absolute -left-[29px] top-1 w-7 h-7 rounded-full border flex items-center justify-center ${theme.timelineDot}`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Briefcase className="w-3.5 h-3.5" />
            </motion.div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className={theme.subheading}>{exp.title}</h3>
                <span className={`text-sm ${theme.muted}`}>{exp.period}</span>
              </div>
              <p className={theme.strong}>{exp.company}</p>
              <p className={`text-sm ${theme.muted}`}>{exp.description}</p>
              <ul className="space-y-1 mt-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievement}
                    className={`text-sm flex gap-2 ${theme.body}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                  >
                    <span className={theme.accent}>•</span>
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

import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { inkTheme } from './design';

const projects = [
  {
    id: 1,
    title: 'InclusiFi',
    description:
      'A full-stack AI-powered finance application, enhancing user financial literacy and management skills, using OpenAI, Next.JS, and Python.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['OpenAI', 'Next.JS', 'Python', 'Ruby'],
    outcome: 'Enhanced financial literacy through AI-powered insights and personalized recommendations',
    links: {
      github: null,
    },
  },
  {
    id: 2,
    title: 'Stock Analyzer',
    description:
      'Stock price prediction using historical data of S&P 500 stocks. Developed, trained, and evaluated various ML models including SVR, Random Forest, LSTM, XGBoost, LightGBM, and CatBoost.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    outcome: 'Accurate stock price forecasting using multiple machine learning models',
    links: {
      github: 'https://github.com/Neo-L-N/stocks_analyzer',
    },
  },
  {
    id: 3,
    title: 'Dollars Secure Web',
    description:
      'Web-based chat application providing secure and real-time communication. Features user authentication, customizable avatars, and both public and private chat rooms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Node.js', 'Express.js', 'Socket.IO'],
    outcome: 'Real-time secure messaging platform with public and private chat capabilities',
    links: {
      github: 'https://github.com/Neo-L-N/Dollars-Secure-Web',
    },
  },
];

export function Portfolio({ isDark }) {
  const theme = inkTheme(isDark);

  return (
    <section>
      <h2 className={theme.heading}>
        Portfolio
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`overflow-hidden ${theme.card}`}
          >
            <div className="relative overflow-hidden h-48">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <ImageWithFallback src={project.image} alt={project.title} className="w-full h-48 object-cover grayscale contrast-125" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="p-5 space-y-3">
              <h3 className={theme.subheading}>{project.title}</h3>
              <p className={`text-sm ${theme.muted}`}>{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-1 ${theme.chip}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`pt-3 border-t ${theme.rule}`}>
                <p className={`text-xs mb-3 ${theme.muted}`}>
                  <span className={theme.accent}>Outcome:</span> {project.outcome}
                </p>

                {project.links.github && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={theme.button}
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

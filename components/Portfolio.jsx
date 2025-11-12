import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      live: '#',
      github: '#',
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
      live: '#',
      github: '#',
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
      live: '#',
      github: '#',
    },
  },
];

export function Portfolio({ isDark }) {
  return (
    <section>
      <h2
        className={
          isDark
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 pb-2 border-b border-purple-800/30 text-2xl'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 pb-2 border-b border-purple-200 text-2xl'
        }
      >
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
            whileHover={{ y: -8 }}
            className={
              isDark
                ? 'rounded-lg overflow-hidden bg-slate-900/50 border border-purple-800/30 backdrop-blur-sm'
                : 'rounded-lg overflow-hidden bg-white border border-purple-200 shadow-sm'
            }
          >
            <div className="relative overflow-hidden h-48">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <ImageWithFallback src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-5 space-y-3">
              <h3 className={isDark ? 'text-purple-300' : 'text-purple-700'}>{project.title}</h3>
              <p className={isDark ? 'text-zinc-400 text-sm' : 'text-zinc-600 text-sm'}>{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={
                      isDark
                        ? 'text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-200 border border-purple-700/50'
                        : 'text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-300'
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={isDark ? 'pt-3 border-t border-purple-800/30' : 'pt-3 border-t border-purple-200'}>
                <p className={isDark ? 'text-xs text-zinc-400 mb-3' : 'text-xs text-zinc-600 mb-3'}>
                  <span className={isDark ? 'text-purple-300' : 'text-purple-700'}>Outcome:</span> {project.outcome}
                </p>

                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className={
                        isDark
                          ? 'bg-purple-900/30 border-purple-700/50 text-purple-200 hover:bg-purple-900/50'
                          : 'bg-purple-100 border-purple-300 text-purple-800 hover:bg-purple-200'
                      }
                      asChild
                    >
                      <a href={project.links.live}>
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={isDark ? 'text-zinc-400 hover:text-purple-300' : 'text-zinc-600 hover:text-purple-700'}
                      asChild
                    >
                      <a href={project.links.github}>
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

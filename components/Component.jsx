import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { About } from './About';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { Portfolio } from './Portfolio';
import { Certifications } from './Certifications';
import { Contact } from './Contact';
import { LoadingScreen } from './LoadingScreen';
import { ScrollToTop } from './ScrollToTop';

export default function Component() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={
            isDark
              ? 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-zinc-100'
              : 'min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-zinc-900'
          }
        >
          <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
          <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <About isDark={isDark} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Experience isDark={isDark} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Portfolio isDark={isDark} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <Education isDark={isDark} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <Certifications isDark={isDark} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <Skills isDark={isDark} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
              <Contact isDark={isDark} />
            </motion.div>
          </main>
          <footer className={isDark ? 'border-t border-purple-800/30 py-8' : 'border-t border-purple-200 py-8'}>
            <div className={isDark ? 'max-w-4xl mx-auto px-6 text-center text-zinc-400' : 'max-w-4xl mx-auto px-6 text-center text-zinc-500'}>
              <p>© 2025 All rights reserved.</p>
            </div>
          </footer>
          <ScrollToTop isDark={isDark} />
        </motion.div>
      )}
    </>
  );
}

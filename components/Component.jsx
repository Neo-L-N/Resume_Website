import React, { useEffect, useState } from 'react';
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
import { inkTheme } from './design';

export default function Component() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const theme = inkTheme(isDark);

  useEffect(() => {
    const background = isDark ? '#181818' : '#ffffff';
    document.documentElement.style.backgroundColor = background;
    document.body.style.backgroundColor = background;

    const root = document.getElementById('root');
    if (root) {
      root.style.backgroundColor = background;
    }
  }, [isDark]);

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
          className={theme.page}
        >
          <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
          <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-20">
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
          <footer className={`relative z-[1] border-t py-8 ${theme.rule}`}>
            <div className={`max-w-4xl mx-auto px-6 text-center ${theme.muted}`}>
              <p>© 2026 All rights reserved.</p>
            </div>
          </footer>
          <ScrollToTop isDark={isDark} />
        </motion.div>
      )}
    </>
  );
}

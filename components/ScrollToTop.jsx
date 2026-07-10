import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { inkTheme } from './design';

export function ScrollToTop({ isDark }) {
  const [isVisible, setIsVisible] = useState(false);
  const theme = inkTheme(isDark);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }} transition={{ duration: 0.3 }} className="fixed bottom-8 right-8 z-50">
          <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={scrollToTop}
              size="icon"
              className={`w-12 h-12 rounded-full shadow-lg ${theme.primaryButton}`}
            >
              <ArrowUp className="w-5 h-5" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { inkTheme } from './design';

export function ThemeToggle({ isDark, onToggle }) {
  const theme = inkTheme(isDark);

  return (
    <motion.div whileHover={{ scale: 1.05, rotate: 180 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
      <Button
        variant="outline"
        size="icon"
        onClick={onToggle}
        className={theme.button}
      >
        <motion.div initial={false} animate={{ rotate: isDark ? 0 : 360 }} transition={{ duration: 0.5 }}>
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}

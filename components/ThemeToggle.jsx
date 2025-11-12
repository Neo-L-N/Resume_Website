import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.div whileHover={{ scale: 1.05, rotate: 180 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
      <Button
        variant="outline"
        size="icon"
        onClick={onToggle}
        className={
          isDark
            ? 'bg-purple-900/30 border-purple-700/50 text-purple-200 hover:bg-purple-900/50 hover:text-purple-100'
            : 'bg-purple-100 border-purple-300 text-purple-800 hover:bg-purple-200 hover:text-purple-900'
        }
      >
        <motion.div initial={false} animate={{ rotate: isDark ? 0 : 360 }} transition={{ duration: 0.5 }}>
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}

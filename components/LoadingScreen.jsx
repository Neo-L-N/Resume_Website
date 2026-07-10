import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white text-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-[1] text-center space-y-6">
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl font-black mb-2">Eduardo Mesa</h1>
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">Portfolio Loading...</p>
        </motion.div>

        <div className="w-64 h-2 bg-black/10 rounded-full overflow-hidden border border-black/20">
          <motion.div className="h-full bg-black" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
        </div>

        <motion.div className="flex gap-2 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="w-3 h-3 bg-black rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

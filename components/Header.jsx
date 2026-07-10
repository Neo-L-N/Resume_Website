import React, { useState } from 'react';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { FORM_ENDPOINT } from './constants';
import { inkTheme } from './design';

export function Header({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const theme = inkTheme(isDark);

  return (
    <header className={theme.header}>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className={`hero-mark inline-flex mb-4 ${theme.subheading}`}>Data + AI Scientist</div>
            <h1 className={`mb-3 text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] ${theme.subheading}`}>
              Eduardo Mesa
            </h1>
            <p className={`max-w-2xl text-lg sm:text-xl leading-relaxed ${theme.body}`}>
              Data and AI practitioner building cloud-enabled analytics, machine learning workflows, and decision support tools for high-stakes public sector work.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-3 items-center md:justify-end" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm" className={theme.button}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className={theme.dialog}>
                <DialogHeader>
                  <DialogTitle className={theme.subheading}>Send me a message</DialogTitle>
                  <DialogDescription className={theme.muted}>Fill out the form below and I&apos;ll get back to you as soon as possible.</DialogDescription>
                </DialogHeader>
                <form action={FORM_ENDPOINT} method="POST" className="space-y-4" onSubmit={() => setOpen(false)}>
                  <input type="hidden" name="_subject" value="Portfolio Message (Header Dialog)" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="space-y-2">
                    <Label htmlFor="header-name" className={theme.body}>
                      Name
                    </Label>
                    <Input id="header-name" name="name" className={theme.input} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="header-email" className={theme.body}>
                      Email
                    </Label>
                    <Input id="header-email" type="email" name="email" className={theme.input} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="header-message" className={theme.body}>
                      Message
                    </Label>
                    <Textarea id="header-message" name="message" className={`${theme.input} min-h-[120px]`} required />
                  </div>
                  <DialogFooter>
                    <Button type="submit" className={theme.primaryButton}>
                      Send Message
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className={theme.button} asChild>
                <a href="https://github.com/Neo-L-N" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className={theme.button} asChild>
                <a href="https://www.linkedin.com/in/edmesag3" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className={theme.button}>
                <MapPin className="w-4 h-4 mr-2" />
                Washington, DC
              </Button>
            </motion.div>
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </motion.div>
          </div>
          <div className={`grid grid-cols-2 gap-px overflow-hidden rounded-lg border ${theme.rule} ${isDark ? 'bg-white/15' : 'bg-black/10'} md:grid-cols-4`}>
            {['Washington, DC', 'Data + AI', 'AWS AI Practitioner', 'Federal Tech'].map((item) => (
              <div key={item} className={isDark ? 'bg-[#242424]/95 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-200' : 'bg-white/90 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-600'}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

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

export function Header({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={isDark ? 'border-b border-purple-800/30 bg-slate-900/80 backdrop-blur-md sticky top-0 z-10' : 'border-b border-purple-200 bg-white/80 backdrop-blur-md sticky top-0 z-10'}>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className={isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2'}>
              Eduardo Mesa
            </h1>
            <p className={isDark ? 'text-purple-300' : 'text-purple-700'}>Technology Analyst</p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-3 items-center" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm" className={isDark ? 'text-zinc-300 hover:text-purple-300 hover:bg-purple-900/30' : 'text-zinc-700 hover:text-purple-700 hover:bg-purple-100'}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className={isDark ? 'bg-slate-900 border-purple-800/50' : 'bg-white border-purple-200'}>
                <DialogHeader>
                  <DialogTitle className={isDark ? 'text-purple-300' : 'text-purple-800'}>Send me a message</DialogTitle>
                  <DialogDescription className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Fill out the form below and I&apos;ll get back to you as soon as possible.</DialogDescription>
                </DialogHeader>
                <form action={FORM_ENDPOINT} method="POST" className="space-y-4" onSubmit={() => setOpen(false)}>
                  <input type="hidden" name="_subject" value="Portfolio Message (Header Dialog)" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="space-y-2">
                    <Label htmlFor="header-name" className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      Name
                    </Label>
                    <Input id="header-name" name="name" className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-200' : 'bg-white border-purple-200'} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="header-email" className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      Email
                    </Label>
                    <Input id="header-email" type="email" name="email" className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-200' : 'bg-white border-purple-200'} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="header-message" className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      Message
                    </Label>
                    <Textarea id="header-message" name="message" className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-200 min-h-[120px]' : 'bg-white border-purple-200 min-h-[120px]'} required />
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className={
                        isDark
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                      }
                    >
                      Send Message
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className={isDark ? 'text-zinc-300 hover:text-purple-300 hover:bg-purple-900/30' : 'text-zinc-700 hover:text-purple-700 hover:bg-purple-100'} asChild>
                <a href="https://github.com/Neo-L-N" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className={isDark ? 'text-zinc-300 hover:text-purple-300 hover:bg-purple-900/30' : 'text-zinc-700 hover:text-purple-700 hover:bg-purple-100'} asChild>
                <a href="https://www.linkedin.com/in/edmesag3" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className={isDark ? 'text-zinc-300 hover:text-purple-300 hover:bg-purple-900/30' : 'text-zinc-700 hover:text-purple-700 hover:bg-purple-100'}>
                <MapPin className="w-4 h-4 mr-2" />
                Washington, DC
              </Button>
            </motion.div>
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

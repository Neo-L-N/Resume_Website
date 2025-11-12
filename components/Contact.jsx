import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { FORM_ENDPOINT } from './constants';

export function Contact({ isDark }) {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact">
      <h2
        className={
          isDark
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 pb-2 border-b border-purple-800/30 text-2xl'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 pb-2 border-b border-purple-200 text-2xl'
        }
      >
        Get in Touch
      </h2>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
            I&apos;m always interested in hearing about new opportunities and collaborations. Feel free to reach out through the form or any of the quick contact options.
          </p>
          <div className="flex flex-wrap gap-3">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className={
                      isDark
                        ? 'bg-purple-900/30 border-purple-700/50 text-purple-200 hover:bg-purple-900/50 hover:text-purple-100'
                        : 'bg-purple-100 border-purple-300 text-purple-800 hover:bg-purple-200 hover:text-purple-900'
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className={isDark ? 'bg-slate-900 border-purple-800/50' : 'bg-white border-purple-200'}>
                <DialogHeader>
                  <DialogTitle className={isDark ? 'text-purple-300' : 'text-purple-800'}>Send me a message</DialogTitle>
                  <DialogDescription className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form action={FORM_ENDPOINT} method="POST" className="space-y-4" onSubmit={() => setOpen(false)}>
                  <input type="hidden" name="_subject" value="Portfolio Message (Contact Dialog)" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      Name
                    </Label>
                    <Input id="contact-name" name="name" className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-200' : 'bg-white border-purple-200'} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      Email
                    </Label>
                    <Input id="contact-email" type="email" name="email" className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-200' : 'bg-white border-purple-200'} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-200 min-h-[120px]' : 'bg-white border-purple-200 min-h-[120px]'}
                      required
                    />
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
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className={
                  isDark
                    ? 'bg-purple-900/30 border-purple-700/50 text-purple-200 hover:bg-purple-900/50 hover:text-purple-100'
                    : 'bg-purple-100 border-purple-300 text-purple-800 hover:bg-purple-200 hover:text-purple-900'
                }
                asChild
              >
                <a href="https://www.linkedin.com/in/edmesag3" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className={
                  isDark
                    ? 'bg-purple-900/30 border-purple-700/50 text-purple-200 hover:bg-purple-900/50 hover:text-purple-100'
                    : 'bg-purple-100 border-purple-300 text-purple-800 hover:bg-purple-200 hover:text-purple-900'
                }
                asChild
              >
                <a href="https://github.com/Neo-L-N" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          className={
            isDark
              ? 'rounded-xl border border-purple-800/40 bg-slate-900/60 p-6 space-y-4 shadow-lg shadow-purple-900/20'
              : 'rounded-xl border border-purple-200 bg-white/80 p-6 space-y-4 shadow-lg shadow-purple-100'
          }
        >
          <input type="hidden" name="_subject" value="Portfolio Message (Primary Form)" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="space-y-2">
            <Label htmlFor="contact-inline-name" className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>
              Name
            </Label>
            <Input
              id="contact-inline-name"
              name="name"
              placeholder="Jane Doe"
              className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-100' : 'bg-white border-purple-200'}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-inline-email" className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>
              Email
            </Label>
            <Input
              id="contact-inline-email"
              type="email"
              name="email"
              placeholder="you@email.com"
              className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-100' : 'bg-white border-purple-200'}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-inline-message" className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>
              Message
            </Label>
            <Textarea
              id="contact-inline-message"
              name="message"
              placeholder="Tell me about your project or idea..."
              className={isDark ? 'bg-slate-800 border-purple-700/50 text-zinc-100 min-h-[140px]' : 'bg-white border-purple-200 min-h-[140px]'}
              required
            />
          </div>
          <Button
            type="submit"
            className={
              isDark
                ? 'w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                : 'w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
            }
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

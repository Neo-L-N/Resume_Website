import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { FORM_ENDPOINT } from './constants';
import { inkTheme } from './design';

export function Contact({ isDark }) {
  const theme = inkTheme(isDark);

  return (
    <section id="contact">
      <h2 className={theme.heading}>
        Get in Touch
      </h2>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className={theme.body}>
            I&apos;m always interested in hearing about new opportunities and collaborations. Feel free to reach out through the form or any of the quick contact options.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className={theme.button}
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
                className={theme.button}
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
          className={`p-6 space-y-4 ${theme.card}`}
        >
          <input type="hidden" name="_subject" value="Portfolio Message (Primary Form)" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="space-y-2">
            <Label htmlFor="contact-inline-name" className={theme.strong}>
              Name
            </Label>
            <Input
              id="contact-inline-name"
              name="name"
              placeholder="Jane Doe"
              className={theme.input}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-inline-email" className={theme.strong}>
              Email
            </Label>
            <Input
              id="contact-inline-email"
              type="email"
              name="email"
              placeholder="you@email.com"
              className={theme.input}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-inline-message" className={theme.strong}>
              Message
            </Label>
            <Textarea
              id="contact-inline-message"
              name="message"
              placeholder="Tell me about your project or idea..."
              className={`${theme.input} min-h-[140px]`}
              required
            />
          </div>
          <Button type="submit" className={`w-full ${theme.primaryButton}`}>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

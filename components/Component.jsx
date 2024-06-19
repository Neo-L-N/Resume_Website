import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_d0tv16x', // Replace with your EmailJS service ID
      'template_wb4rmuf', // Replace with your EmailJS template ID
      formData,
      'your_user_id' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send message, please try again later.');
    });
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LaptopIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold">Eduardo Mesa</h1>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:underline underline-offset-4">
            Projects
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Experience
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Skills
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Contact
          </a>
        </nav>
        <Button className="md:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="bg-gray-900 text-white py-12 md:py-20 px-6 md:px-8 flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to my Portfolio</h2>
          <p className="text-lg md:text-xl mb-8">Explore my coding projects, work experience, and skills.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              View Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-transparent border border-white px-4 py-2 text-white hover:bg-white hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              Contact Me
            </a>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-20 px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <img src="/placeholder.svg" width={400} height={225} alt="Project 1" className="rounded-t-md" />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">InclusiFi</h3>
                <p className="text-gray-500 mb-4">A full-stack AI-powered finance application, enhancing user financial literacy and
                  management skills, using OpenAI, Next.JS, and Python.</p>
                <div className="flex gap-2">
                  <Badge>OpenAI</Badge>
                  <Badge>Next.JS</Badge>
                  <Badge>Python</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="/placeholder.svg" width={400} height={225} alt="Project 2" className="rounded-t-md" />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">Financial Forecasting Tool</h3>
                <p className="text-gray-500 mb-4">A multi-layer DNN model to predict future savings and provided key insights into financial trends.</p>
                <p className="text-gray-500 mb-4">Visualized financial data through detailed reports and charts, highlighting accumulated savings and
                  monthly expenses breakdown, aiding in strategic financial planning.</p>
                <div className="flex gap-2">
                  <Badge>Python</Badge>
                  <Badge>Pandas</Badge>
                  <Badge>Matplotlib</Badge>
                  <Badge>TensorFlow</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="/placeholder.svg" width={400} height={225} alt="Project 3" className="rounded-t-md" />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">Bookstore Restful API</h3>
                <p className="text-gray-500 mb-4">Successfully led a team to design and implement a secure, RESTful Java-based API for an online
                  bookstore, integrating a MySQL backend for safe data handling.</p>
                <div className="flex gap-2">
                  <Badge>Java</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Spring boot</Badge>
                  <Badge>Postman</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="experience" className="bg-gray-100 py-12 md:py-20 px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Project Management Intern</h3>
              <p className="text-gray-500 mb-2">
                National Nuclear Security Administration (NNSA) | Jun. 2023 – Aug. 2023
              </p>
              <ul className="list-disc pl-6 text-gray-500">
                <li>
                  Spearheaded the creation of a project proposal, securing thousands in budget funds, through
                  comprehensive research and strategic planning.
                </li>
                <li>
                  Enhanced global radiological threat countermeasures by collaborating with cross-cultural teams,
                  contributing to impactful international projects.
                </li>
                <li>
                  Advanced NNSA's diplomatic initiatives by participating in meetings with foreign dignitaries across
                  Europe, Asia, and Latin America, developing key diplomatic and project management skills.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Computer Science Tutor</h3>
              <p className="text-gray-500 mb-2">Florida International University (FIU) | Sep. 2022 – May 2023</p>
              <ul className="list-disc pl-6 text-gray-500">
                <li>
                  Elevated the understanding of foundational coding principles among over a dozen students, utilizing
                  effective communication and teaching methods.
                </li>

              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Global Trade Compliance Intern</h3>
              <p className="text-gray-500 mb-2">Boeing | Jun. 2022 – Aug. 2022</p>
              <ul className="list-disc pl-6 text-gray-500">
                <li>Gained experience in global trade compliance and regulations.</li>
                <li>Ensured compliance in transactions worth hundreds of millions by meticulously cross-referencing databases and collaborating with global entities.</li>
                <li>Contributed to safeguarding company integrity and fostering trustworthy partnerships through extensive research and verification of partner companies.</li>
                <li>Demonstrated adaptability and efficiency in a corporate environment, working seamlessly with a partially remote team.</li>

              </ul>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-20 px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>React</div>
            <div>Node.js</div>
            <div>TypeScript</div>
            <div>JavaScript</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Tailwind CSS</div>
            <div>Git</div>
            <div>Java</div>
            <div>C</div>
            <div>Python</div>
            <div>Bash</div>
            <div>Linux</div>
          </div>
        </section>
        <section id="contact" className="bg-gray-900 text-white py-12 md:py-20 px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input id="name" name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea id="message" name="message" rows={4} placeholder="Enter your message" value={formData.message} onChange={handleChange} className="w-full" required />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 Eduardo Mesa. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" className="hover:text-gray-400">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" className="hover:text-gray-400">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}

function GithubIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LaptopIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
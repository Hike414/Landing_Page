import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import { Brain, Globe, Shield, Mail, Phone, Code2, Database, Server, Award, BookOpen, Building2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 bg-mesh">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-float">
            K.V.Revanth
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            B.Tech CSE Student specializing in Cybersecurity, passionate about Cloud Computing and Full Stack Development
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Rest of the sections updated with dark theme classes */}
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300">
                Currently pursuing B.Tech in CSE with specialization in Cybersecurity (2026) at Sreenidhi Institute of Science and Technology. Maintaining a strong CGPA of 8.31, I'm passionate about cloud computing, cybersecurity, and full-stack development.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Education</h3>
                <ul className="space-y-3">
                  <li className="text-gray-300">
                    <span className="font-semibold text-white">B.Tech CSE (Cybersecurity)</span> - Sreenidhi Institute of Science and Technology
                  </li>
                  <li className="text-gray-300">
                    <span className="font-semibold text-white">Intermediate</span> - Narayana Junior College (850 Marks)
                  </li>
                  <li className="text-gray-300">
                    <span className="font-semibold text-white">Class X</span> - Army Public School, Bolarum (9 CGPA)
                  </li>
                </ul>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-white">Leadership Roles</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Building2 className="h-5 w-5 mr-2 text-indigo-400" />
                  Organizing Head - The LIT Club
                </li>
                <li className="flex items-center text-gray-300">
                  <Shield className="h-5 w-5 mr-2 text-indigo-400" />
                  Organizing Head - Cybersecurity Club
                </li>
                <li className="flex items-center text-gray-300">
                  <Award className="h-5 w-5 mr-2 text-indigo-400" />
                  Vice Chair - IEEE Sensors council SNIST
                </li>
                <li className="flex items-center text-gray-300">
                  <BookOpen className="h-5 w-5 mr-2 text-indigo-400" />
                  Treasurer - IEEE Nanotechnology council SNIST
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Blog Website"
              description="A full-stack development project showcasing modern web development practices and responsive design."
              image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80"
              tags={['Full Stack', 'React', 'Node.js', 'MongoDB']}
              githubUrl="https://github.com/Hike414/Blog-Website"
            />
            <ProjectCard
              title="Auction Alley"
              description="A web application for online auctions with real-time bidding functionality and secure payment integration."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              tags={['Web Development', 'JavaScript', 'API Integration']}
              githubUrl="https://github.com/Hike414/Auction-alley"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Cloud & Security"
              icon={Shield}
              skills={['AWS Services', 'Cloud Security', 'Network Security', 'Security Ops']}
            />
            <SkillCard
              title="Programming Languages"
              icon={Code2}
              skills={['C++', 'Java', 'Python', 'SQL', 'HTML/CSS']}
            />
            <SkillCard
              title="Technologies"
              icon={Globe}
              skills={['Data Structures', 'DBMS', 'Full Stack Development']}
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'AWS Data Engineering - AICTE NEAT',
              'Palo Alto Cyber Security - AICTE NEAT',
              'Information Security - Infosys Springboard',
              'SQL and Relational Databases - IBM',
              'Chatbot Development - Cognitive Classes',
              'Prompt Engineering - IBM',
              'Software Testing - JP Morgan & Co',
              'Power BI - PwC'
            ].map((cert, index) => (
              <div key={index} className="glass-card p-4 rounded-lg">
                <p className="text-gray-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Get in Touch</h2>
          <div className="glass-card rounded-xl p-8">
            <div className="text-center mb-8">
              <p className="text-gray-300 mb-2">
                <Mail className="inline-block h-5 w-5 mr-2 text-indigo-400" />
                22311A6224@cs.sreenidhi.edu.in
              </p>
              <p className="text-gray-300">
                <Phone className="inline-block h-5 w-5 mr-2 text-indigo-400" />
                +91 9542908947
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 glass rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 glass rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 glass rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 K.V.Revanth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
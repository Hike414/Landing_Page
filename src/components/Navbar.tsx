import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Instagram, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center group">
            <Code2 className="h-8 w-8 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="ml-2 text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
              Revanth.dev
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="flex items-center space-x-3">
                <SocialLink href="https://github.com/Hike414" icon={Github} />
                <SocialLink href="https://www.instagram.com/_iamrevanth/" icon={Instagram} />
                <SocialLink href="https://www.linkedin.com/in/k-v-revanth-9ab052265/" icon={Linkedin} />
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 transform ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="glass shadow-lg px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink href="#about">About</MobileNavLink>
          <MobileNavLink href="#projects">Projects</MobileNavLink>
          <MobileNavLink href="#skills">Skills</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
          <div className="flex justify-center space-x-4 pt-2">
            <SocialLink href="https://github.com/Hike414" icon={Github} />
            <SocialLink href="https://www.instagram.com/_iamrevanth/" icon={Instagram} />
            <SocialLink href="https://www.linkedin.com/in/k-v-revanth-9ab052265/" icon={Linkedin} />
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium
               transition-all duration-300 hover:-translate-y-1"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium
               transition-all duration-300 hover:bg-white/10 hover:pl-6"
  >
    {children}
  </a>
);

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
  >
    <Icon className="h-5 w-5" />
  </a>
);
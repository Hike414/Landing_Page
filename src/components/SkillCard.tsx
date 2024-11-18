import React from 'react';
import { Icon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: Icon;
  skills: string[];
}

export default function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="group glass-card p-6 rounded-xl transition-all duration-300
                    hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="relative">
        <div className="flex items-center mb-4">
          <Icon className="h-8 w-8 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="ml-3 text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="px-3 py-1 glass text-white rounded-full text-sm
                         hover:bg-white/20 transition-all duration-300
                         transform hover:scale-105"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
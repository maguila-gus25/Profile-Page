import React from 'react';
import { skills } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const categories = ['Programming', 'Web Development', 'Tools', 'Other'];
  
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-tag bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 
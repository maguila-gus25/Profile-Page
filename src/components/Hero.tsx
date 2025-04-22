import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Information Systems Student & Tech Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          I'm a 19-year-old student at Federal University of Santa Catarina, passionate about technology and software development.
          Currently working as an IT intern at UDESC and serving as an administrative director at CASIN.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/gustavo-ramos-2061a4257/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:contato.gustavohcramos@gmail.com"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}; 
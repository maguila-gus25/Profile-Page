import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { SkillsSection } from './components/SkillsSection'
import { Footer } from './components/Footer'
import { projects } from './data/projects'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <SkillsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App 
import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
            <img 
              src="https://via.placeholder.com/128" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Gustavo Ramos</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Information Systems student at Federal University of Santa Catarina
          </p>
          <p className="text-gray-600 dark:text-gray-300">19 years old</p>
        </header>

        {/* Social Links */}
        <nav className="flex justify-center gap-4 mb-12">
          <a 
            href="https://www.linkedin.com/in/gustavo-ramos-2061a4257/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/gustavocramos/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://x.com/Gustavramos25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Twitter
          </a>
          <a 
            href="mailto:contato.gustavohcramos@gmail.com"
            className="hover:text-red-500 transition-colors"
          >
            Email
          </a>
        </nav>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img 
                src="imagem_redimensionada.png" 
                alt="Cinema Management System" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <a 
                  href="https://github.com/jpfaraoni/Cinema-Manager" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-blue-500 transition-colors"
                >
                  Cinema Management System
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            &copy; 2025 Gustavo Ramos
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App

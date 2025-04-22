export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Cinema Management System",
    description: "A terminal-based system for managing movie theater operations, including session scheduling, ticket sales, age restriction rules, and sales reports.",
    technologies: ["Python", "MVC Pattern", "CLI"],
    role: "Backend developer - Handled sales, session management, data flow, and CLI interface",
    githubUrl: "https://github.com/jpfaraoni/Cinema-Manager"
  },
  {
    id: 2,
    title: "LangChain Terminal Chatbot",
    description: "A terminal-based chatbot using LangChain for natural language processing.",
    technologies: ["Python", "LangChain", "NLP"],
    role: "Developer"
  },
  {
    id: 3,
    title: "YouTube Video Downloader",
    description: "A Python application for downloading YouTube videos using pytubefix.",
    technologies: ["Python", "pytubefix"],
    role: "Developer"
  },
  {
    id: 4,
    title: "Discrete Math and Game Strategies",
    description: "Research and presentation project on Discrete Math and Game Strategies.",
    technologies: ["Mathematics", "Game Theory"],
    role: "Researcher and Presenter"
  }
]; 
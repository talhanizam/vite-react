import { useState } from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav className="flex space-x-4 mt-2">
          <button onClick={() => setActiveTab('about')} className="px-3 py-1 rounded hover:bg-blue-700">About</button>
          <button onClick={() => setActiveTab('skills')} className="px-3 py-1 rounded hover:bg-blue-700">Skills</button>
          <button onClick={() => setActiveTab('education')} className="px-3 py-1 rounded hover:bg-blue-700">Education</button>
          <button onClick={() => setActiveTab('projects')} className="px-3 py-1 rounded hover:bg-blue-700">Projects</button>
          <button onClick={() => setActiveTab('contact')} className="px-3 py-1 rounded hover:bg-blue-700">Contact</button>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        {activeTab === 'about' && <About />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App

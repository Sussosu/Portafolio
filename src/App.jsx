import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Views/Home"
import Contact from "./Views/Contact"
import Projects from "./Views/Projects"
import Skills from "./Views/Skills"

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font"> 
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

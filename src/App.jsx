import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"

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

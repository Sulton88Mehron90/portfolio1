import React from 'react'
import Header from '../src/components/Header'
import Hero from './components/Hero'
import About from '../src/components/About'
import Projects from '../src/components/Projects'

export default function App() {
  return (
    <div>
      <Header />
      <main>
      <Hero />
      <About />
      <Projects />
      </main>
    </div>
  )
}

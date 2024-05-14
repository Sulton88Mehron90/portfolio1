import React from 'react'
import Header from '../src/components/Header'
import Hero from './components/Hero'
import About from '../src/components/About'
import Projects from '../src/components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTopButton from '../src/components/BackToTopButton.jsx'


export default function App() {
  return (
    <div>
      <Header />
      <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
      </main>
      <Footer />
      <BackToTopButton /> 
    </div>
  )
}

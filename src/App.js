import React from 'react'
import Header from '../src/components/Header'
import Hero from './components/Hero'
import About from '../src/components/About'

export default function App() {
  return (
    <div>
      <Header />
      <main>
      <Hero />
      <About />
      </main>
    </div>
  )
}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import HomePage from './components/HomePage';
import DetailedAbout from './components/DetailedAbout';
import About from './components/About';
import DetailedProjects from './components/DetailedProjects';
import ContactForm from './components/ContactForm';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  return (
    <Router>
       <ParticlesBackground />
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/detailed-about" component={DetailedAbout} />
          <Route path="/detailed-projects" component={DetailedProjects} />
          <Route path="/contact-form" component={ContactForm} />
        </Switch>
      </main>
      <Footer />
      <BackToTopButton />
    </Router>
  );
}

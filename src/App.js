// // import React from 'react'
// // import Header from '../src/components/Header'
// // import Hero from './components/Hero'
// // import About from '../src/components/About'
// // import Projects from '../src/components/Projects'
// // import Contact from './components/Contact'
// // import Footer from './components/Footer'
// // import BackToTopButton from '../src/components/BackToTopButton.jsx'


// // export default function App() {
// //   return (
// //     <div>
// //       <Header />
// //       <main>
// //       <Hero />
// //       <About />
// //       <Projects />
// //       <Contact />
// //       </main>
// //       <Footer />
// //       <BackToTopButton /> 
// //     </div>
// //   )
// // }


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from '../src/components/Header';
// import About from '../src/components/About';
// import Footer from './components/Footer';
// import BackToTopButton from '../src/components/BackToTopButton';
// import DetailedAbout from '../src/components/DetailedAbout';
// import HomePage from '../src/components/HomePage'

// export default function App() {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/about" component={About} />
//           <Route path="/detailed-about" component={DetailedAbout} />
//         </Switch>
//       </main>
//       <Footer />
//       <BackToTopButton />
//     </Router>
//   );
// }


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BackToTopButton from './components/BackToTopButton';
// import HomePage from './components/HomePage';
// import DetailedAbout from './components/DetailedAbout';
// import About from './components/About';
// import DetailedProjects from './components/DetailedProjects';


// export default function App() {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/about" component={About} />
//           <Route path="/detailed-about" component={DetailedAbout} />
//           <Route path="/detailed-projects" component={DetailedProjects} />
//         </Switch>
//       </main>
//       <Footer />
//       <BackToTopButton />
//     </Router>
//   );
// }


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

export default function App() {
  return (
    <Router>
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

import avicennaMethod from '../assets/avicennaMethod.png'
import rancidTomatillos from '../assets/rancidTomatillos.png'
import refuge from '../assets/refuge.png'
import fitChicks from '../assets/fitChicks.png'
import parkPassport from '../assets/parkPassport.png'
import whatsCookin from '../assets/whatsCookin.png'
import coloRandom from '../assets/coloRandom.png'
import travelTracker from '../assets/travelTracker.png'
import selfCareCenter from '../assets/selfCareCenter.png'
import rockPaperScissors from '../assets/rockPaperScissors.png'
import Rubaiyat from '../assets/Rubaiyat.png'
import newsReader from '../assets/newsReader.png'
import interviewPrepQuestions from '../assets/interviewPrepQuestions.png'
import flashCards from '../assets/flashCards.png'
import Project from '../components/Project'
import React from 'react';
import { Link } from 'react-router-dom';
import ideaBox from '../assets/ideaBox.png'

export const projectList = [
  {
    id: 1,
    title: 'Avicenna Method',
    tech: ['React', 'React Router', 'JavaScript', 'HTML5', 'CSS', 'Cypress', 'Figma', 'Node.js', 'GitHub'],
    description:
      'Dive into a world of curiosity with Avicenna Method! Named after the legendary polymath Avicenna (Ibn Sina), this trivia application is designed for those who seek a delightful blend of challenge and learning. Avicenna Method offers trivia enthusiasts and casual learners a chance to test and expand their knowledge across diverse categories. With a focus on a seamless user experience, app lets users tailor their quiz sessions and discover new facts in an engaging manner.',
    liveLink: 'https://showcase-project-khaki.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/showcase-project',
    image: avicennaMethod,
  },

  {
    id: 2,
    title: 'News Reader',
    tech: ['React', 'React Router', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Cypress', 'API', 'Node.js', 'GitHub'],
    description:
      "News Reader is a simple app that lets you catch up on the latest headlines and articles in categories you care about. It aggregates articles from the News API, presenting users with the latest news articles including headlines, images, descriptions, and publishing dates. The app provides a detailed view for each article and a way to filter or search through the news feed.",
    liveLink: 'https://news-reader-sable.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/news-reader',
    image: newsReader,
  },

  {
    id: 3,
    title: 'Refuge - AidConnect/RefugeeAid',
    tech: ['React', 'React Router', 'JavaScript', 'HTML5', 'CSS', 'Cypress', 'Figma', 'GitHub', 'GraphQL', 'Apollo Client'],
    description:
      'Team project. App stands as a beacon for change, seamlessly bridging the gap between aid workers, compassionate citizens, and those in dire need within displaced communities. It offers a real-time feed of specific needs, ensuring targeted, efficient, and impactful assistance. This platform embodies the spirit of global solidarity, enabling connections that empower and unite.',
    liveLink: 'https://refugee-aid-fe.vercel.app/',
    githubLink: 'https://github.com/Refugee-Aid-Capstone/refugee-aid-fe',
    image: refuge,
  },

  {
    id: 4,
    title: 'Interview Prep Questions',
    tech: ['React', 'React Router', 'JavaScript', 'HTML5', 'CSS', 'Cypress', 'API', 'Node.js', 'GitHub'],
    description:
      "The Interview Prep Questions App is a dynamic tool designed to assist job seekers, particularly in software development, in preparing for technical and behavioral interviews. It was inspired while getting ready for an interview simulation with an instructor, and built in 7 hours throughout the day. This user-friendly app offers a range of questions and answers, presented in an interactive flashcard format, making your interview preparation engaging and effective.",
    liveLink: 'https://interview-prep-questions.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/interview-prep-questions',
    image: interviewPrepQuestions,
  },

  {
    id: 5,
    title: 'Rubaiyat of Omar Khayyam.',
    tech: ['React', 'React Router', 'JavaScript', 'HTML5', 'CSS', 'GitHub'],
    description:
      "Rubaiyat offers a captivating experience for both poetry enthusiasts and wisdom seekers. Users are presented with random quatrains, merging the age-old insights of Omar Khayyam with the digital age.",
    liveLink: 'https://rubaiyat.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/rubaiyat',
    image: Rubaiyat,
  },

  {
    id: 6,
    title: 'FitChicks',
    tech: ['JavaScript', 'HTML5', 'CSS', 'Webpack', 'Fetch API', 'Figma', 'GitHub', 'Adobe Photoshop'],
    description:
      "Team project. FitChicks/FitLit is a web application dedicated to delivering user-friendly and comprehensive dashboards that depict user's daily habits. These include sleep patterns, hydration levels, and physical activity metrics. The application provides up-to-date activity data, empowering users with insights about their lifestyle and facilitating informed decisions towards achieving their health goals and milestones.FitChicks/FitLit operates on a local server environment and interacts with dedicated API endpoints to fetch and manipulate user-specific data. Moreover, FitLit supports user interactivity allowing users to add new hydration records and daily activity notes, which aids in further customizing their health-tracking experience.",
    liveLink: 'https://fitlit-group-project-jy-jm-ps.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/fitlit-group-project-jy-jm-ps',
    image: fitChicks,
  },

  {
    id: 7,
    title: 'Rancid Tomatillos',
    tech: ['React', 'React Router', 'JavaScript', 'HTML5', 'CSS', 'Cypress', 'Figma', 'GitHub', 'Heroku'],
    description:
      'Team project. Welcome to Rancid Tomatillos, your go-to platform for all things cinema! Browse our extensive library of movies, delve into detailed information on each film, and even watch trailers. Use the search feature to find movies that pique your interest, or filter films based on ratings to discover hidden gems.',
    liveLink: 'https://rancid-tomatillos-denzel-parvin.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/rancid-tomatillos-denzel-parvin',
    image: rancidTomatillos,
  },

  {
    id: 8,
    title: 'Travel Tracker',
    tech: ['JavaScript', 'HTML5', 'CSS', 'Webpack', 'Adobe Photoshop', 'Figma', 'GitHub'],
    description:
      "Travel Dashboard serves as an intuitive interface that gives users a holistic view of their travel activities, both past and future. After authenticating with their unique credentials, users are taken to their personalized dashboard where they can review their travel history and plan new journeys with ease. The application communicates with a local server to fetch and update travel data through various API endpoints. Users can effortlessly add new trips, which are immediately reflected on the dashboard. To log in, use the credentials as follows: 👤 Username: traveler<ID> (replace <ID> with your user ID, e.g., traveler50) 🔒 Password: travel",
    liveLink: 'https://travel-tracker-xi.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/travel-tracker',
    image: travelTracker,
  },

  {
    id: 9,
    title: 'Parks Passport',
    tech: ['React', 'React Router', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Cypress', 'Fetch API', 'Figma', 'GitHub'],
    description:
      "Team project. Created a web application that allows a user to browse National Parks, look further into details about a chosen park, and view, save, and remove parks in their favorites. Used data from the public NPS API to make a modern and sleek app that displays the parks data in a more pleasing and easily navigated UI. Collaborated within a dynamic team of three to develop a React project, while gaining proficiency in TypeScript, implementing routing with React Router, and performing end-to-end testing using Cypress.",
    liveLink: 'https://stretch-tech-pi.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/stretchTech',
    image: parkPassport,
  },

  {
    id: 10,
    title: 'Rock-Paper-Scissors',
    tech: ['JavaScript', 'HTML', 'CSS'],
    description:
      "This application allows a user to play the game of Rock, Papers, Scissors against the computer who is making random selections. The user can play two different game modes: classic with 3 choices, and advanced with 5 choices. Total wins are saved and displayed for both the user and computer player.",
    liveLink: 'https://rock-paper-scissors-lime-five.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/Rock-Paper-Scissors',
    image: rockPaperScissors,
  },

  {
    id: 11,
    title: 'FlashCards Starter Kit',
    tech: ['JavaScript', 'HTML', 'CSS'],
    description:
      "This project allows users to answer all questions in a set of flash cards using the command line. Users can attempt to answer questions one by one and recieve feedback after each question.",
    liveLink: 'https://github.com/Sulton88Mehron90/flashCards-starter-kit/blob/main/src/parvin.gif',
    githubLink: 'https://github.com/Sulton88Mehron90/flashCards-starter-kit',
    image: flashCards,
  },

  {
    id: 12,
    title: "What's Cookin'?",
    tech: ['JavaScript', 'HTML', 'CSS', 'Webpack', 'Mocha', 'Chai', 'Fetch API', 'Figma', 'Git'],
    description:
      "Team project. What's Cookin'? is a group project completed as a part of Module 2 at Turing School of Software Design's Front-End curriculum. The application hosts a variety of recipes that can be viewed as a whole, by course (salads, hor d'oevres, main courses, sides), or searched by a tag or recipe name to show relevent recipes. When looking at a recipe's page that recipe can be saved to the users saved recipes page. When looking at the saved recipe collection the user may search through their recipes and delete recipes of their choosing.",
    liveLink: 'https://whats-cookin-group-project.vercel.app/',
    githubLink: 'https://github.com/JamieCaudill/whats-cookin-group-project',
    image: whatsCookin,
  },

  {
    id: 13,
    title: 'ColoRandom',
    tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    description:
      "Team project. An app was built that displays a randomized palette of five colors. This app allows users to save their favorite palettes to a collection and delete palettes from their saved collection as needed. A web application was developed using vanilla JavaScript to create a randomized color palette and enable users to save and delete previous palettes. Git Workflow practices were utilized for team collaboration, and the project was optimized to use data models to track the user’s saved palettes and the current palette. Feedback from project managers and mentors was incorporated through ongoing code reviews.",
    liveLink: 'https://andreasorensen.github.io/coloRandom-Team-Project/',
    githubLink: 'https://github.com/andreasorensen/coloRandom-Team-Project',
    image: coloRandom,
  },

  {
    id: 14,
    title: 'Self-Care Center',
    tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    description:
      "This is a functional website where you can enter, and choose whether you want to see an affirmation or mantra that can be viewed if you click the 'Receive Message' button to get a random affirmation and mantra from the website. Also if you choose to create your own mantra and affirmation, it is possible to do here! Click the 'Add your Message' button to do that. Your entered affirmation or mantra will be added to the array of affirmation and mantras within the code. When going through the list, your messages will appear from the array list. Working on this project helped not only to gain experience using HTML, CSS, and Javascript. Also, reading the affirmation and mantras helped me a great deal. It truly was God sent, considering the difficult time I am going through in my life right now. I am grateful for the opportunity and the inspiring affirmations and mantras that I've read many times during the project.",
    liveLink: 'https://sulton88mehron90.github.io/self-care-center/',
    githubLink: 'https://github.com/Sulton88Mehron90/self-care-center',
    image: selfCareCenter,
  },

  {
    id: 15,
    title: 'Idea Box',
    tech: ['React', 'JavaScript', 'HTML5', 'CSS', 'Cypress', 'Node.js', 'GitHub'],
    description:
      "This application enables users to capture their ideas on virtual cards. Users can input a title and a brief description for their ideas, which will then be displayed on the page.",
    liveLink: 'https://idea-box-one-react.vercel.app/',
    githubLink: 'https://github.com/Sulton88Mehron90/idea-box-one-react',
    image: ideaBox,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="divider">
      <h2>Projects</h2>
      <div>
        {projectList.slice(0, 3).map((project, i) => (
          <Project key={project.id} data={project} reverse={i % 2 === 0} />
        ))}
      </div>
      <Link to="/detailed-projects" className="read-more-link">Load More Projects ...</Link>
    </section>
  );
};

export default Projects;
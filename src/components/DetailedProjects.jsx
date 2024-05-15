// import React from 'react';
// import { projectList } from '../components/Projects';
// import '../components/DetailedProjects.css';

// const DetailedProjects = () => {
//   return (
//     <section id="detailed-projects" className="detailed-projects divider">
//       <h2>My Projects</h2>
//       <div>
//         {projectList.map((project, index) => (
//           <div key={project.id} className={`detailed-project project ${index % 2 === 0 ? 'reverse' : ''}`}>
//             <h3>{project.title}</h3>
//             <div className="image">
//               <img src={project.image} alt={project.title} />
//             </div>
//             <div className="content">
//               <p>{project.description}</p>
//               <ul>
//                 {project.tech.map((tech, techIndex) => (
//                   <li key={techIndex}>{tech}</li>
//                 ))}
//               </ul>
//               <div className="links">
//                 <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-demo-link">
//                   Live Demo
//                 </a>
//                 <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
//                   GitHub Repo
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default DetailedProjects;

import React from 'react';
import { projectList } from '../components/Projects';
import './DetailedProjects.css';
import Project from '../components/Project';

const DetailedProjects = () => {
  return (
    <section id="detailed-projects" className="detailed-projects divider">
      <h2>My Projects</h2>
      <div>
        {projectList.map((project, i) => (
          <Project key={project.id} data={project} reverse={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default DetailedProjects;

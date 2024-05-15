import React, { useEffect } from 'react';
import { projectList } from '../components/Projects';
import Project from '../components/Project';
import '../index.css';
import '../components/DetailedProjects.css'

const DetailedProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id='detailed-projects' className='detailed-projects divider'>
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

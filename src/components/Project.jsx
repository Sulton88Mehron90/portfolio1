import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Project = ({ data, reverse }) => {
  return (
    <article className={`project ${reverse ? 'reverse' : ''}`}>
      <a href={data.liveLink} target="_blank" rel="noopener noreferrer" className="image-link">
        <img src={data.image} alt={data.title} className="image" />
      </a>
      <div className="content">
        <h3>{data.title}</h3>
        <ul>
          {data.tech.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <p>{data.description}</p>
        <div className="links">
        <a href={data.liveLink} target="_blank" rel="noopener noreferrer" className="live-demo-link">
          Live Site
        </a>
        <a href={data.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          GitHub
        </a>
      </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  reverse: PropTypes.bool.isRequired,
};

export default Project;

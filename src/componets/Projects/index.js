import React from 'react';

const Projects = ({ project }) => {
  const { name, description, link, repo } = project;

  return (

    <div className='project-container' key={name}>
      <div className='project-img'>
        <img
          src={require(`../../images/project-pics/${name}.png`)}
          alt={name}
        />
        <div className='text-block hide'>
          <h3>
            <a href={link} target='_blank' rel='noopener noreferrer'>{name}</a><br />
            <a href={repo} target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>

  )
}

export default Projects

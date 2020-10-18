import React from 'react'
import Projects from '../Projects'

const Portfolio = () => {

  const projects = [
    {
      name: 'my-schtick-kick',
      description: 'Group Project: \nJavascript, Node, Express \nSequelize ORM, Bootstrap',
      link: 'https://fathomless-waters-65385.herokuapp.com/',
      repo: 'https://github.com/essennejaye/myschtickkick'
    },
    {
      name: 'rv-roadtrip',
      description: 'Group Project: \nHTML, CSS, Javascript \nJQuery, Bulma',
      link: "https://essennejaye.github.io/rv-roadtrip/",
      repo: "https://github.com/essennejaye/rv-roadtrip"
    },
    {
      name: 'weather-dashboard',
      description: 'HTML, CSS \nJavascript, jQuery',
      link: 'https://essennejaye.github.io/city-forecast/',
      repo: 'https://github.com/essennejaye/city-forecast'
    },
    {
      name: 'web-dev-op-ed',
      description: 'Javascript, Node, Express \nSequelize ORM, Handlebars \nBootstrap',
      link: 'https://fathomless-waters-65385.herokuapp.com/',
      repo: 'https://github.com/essennejaye/dev-op'
    },
    {
      name: 'workday-scheduler',
      description: 'HTML, CSS \nJavascript, jQuery',
      link: 'https://essennejaye.github.io/coder-calender',
      repo: 'https://github.com/essennejaye/coder-calender'
    },

  ];
  return (
    <div>
      <div className='flex-row'>
        {projects.map((project, idx) => (
          <Projects
            project={project}
            key={'project' + idx}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;


import React from 'react'

const Resume = () => {
  return (
    <section className="my-5 section-container">
      <div className="my-2">
        <h2>
          Please download my <a href="https://docs.google.com/document/d/1UQxAhgN9NmcENtChlAySx7omMsgRStof0xOfWJN9oZg/edit?usp=sharing"
            target='_blank' rel='noopener noreferrer'>resume!</a>
        </h2>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs, RESTful API'S</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;

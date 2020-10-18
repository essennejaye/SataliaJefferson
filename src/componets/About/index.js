import React from 'react'
import photo from '../../images/profile_pic.jpg'

const About = () => {
  return (
    <section className='section-container'>
        <img className='profile-pic' src={photo} alt='' />
      <div className='about-container'>
        <p>
          I am an always evolving web developer with a background in healthcare that allows me to combine critical
          thinking skills, effective team communication, attention to detail and an ability to work effectively under
          pressure.
          Recently, I earned a Master of Science in Information Systems from Dakota State University and a
          certificate for full stack web development from the University of Arizona.
          I am excited about the opportunity to venture outside of the usual expectations to help craft memorable,
          lasting and responsive user friendly web applications. 
        </p>
      </div>
    </section>
  )
}

export default About;

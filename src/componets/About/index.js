import React from 'react'
import photo from '../../images/ProfilePic.jpg'

const About = () => {
  return (
    <section className='section-container'>
      <img className='profile-pic' src={photo} alt='' />
      <div className='about-container'>
        <p>
          I am a self-motivated, creative, hard-working Web Developer with a with a proficiency in JavaScript technologies. I have a background in healthcare which has fostered effective
          critical thinking and team communication skills and a keen eye for details. Recently, I earned a Master of Science in Information Systems
          from Dakota State University and a certificate for full stack web development from the University of Arizona. I am excited about the opportunity to
          create high-quality, scalable, and lasting web applications.
        </p> 
        <br />
        <br />
        <br />
        <p className='text-quote'>
          <q>Not everything that is faced can be changed, but nothing can be changed until it is faced.</q><br />
        James Baldwin
        </p>
      </div>
    </section>
  )
}

export default About;

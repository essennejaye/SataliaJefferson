import React from 'react'


const Footer = () => {
  const links = [
    {
      name: 'fab fa-linkedin',
      linkUrl: 'http://www.linkedin.com/in/satalia-n-jefferson'
    },
    {
      name: 'fab fa-github-square',
      linkUrl: 'https://github.com/essennejaye/'
    },
    {
      name: 'fas fa-envelope-square',
      linkUrl: 'mailto:sjeffers02@gmail.com'
    },
    {
      name: 'far fa-file',
      linkUrl: 'https://essennejaye.github.io/webdev-showcase/SNJ_resume_2020.pdf'
    }
  ]
  return (
    <footer className='footer'>
    <p>© 2020 Essennejaye</p>
      {links.map(link => (
        <a href={link.linkUrl} key={link.name} target='_blank' rel='noopener noreferrer'><i className={`img ${link.name}`}></i></a>
      )
      )}

    </footer>
  )
}

export default Footer


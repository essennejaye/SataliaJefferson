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
    }
  ]
  return (
    <footer className='section-container footer'>
    <p>Essennejaye 2020</p>
      {links.map(link => (
        <a href={link.linkUrl} key={link.name} target='_blank' rel='noopener noreferrer'><i className={`img ${link.name}`}></i></a>
      )
      )}
    </footer>
  )
}

export default Footer


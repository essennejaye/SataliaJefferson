import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import ContactForm from '../ContactForm';
import Resume from '../Resume';
// import PageSelected from '../PageSelected';

const Pages = ({ currentPage }) => {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />
      case 'contact':
        return <ContactForm />;
      default:
        return <About />
    }
  };
  return (
    <div>
      {/* <PageSelected> {renderPage()} </PageSelected> */}
      {renderPage()};
    </div>
  )
}

export default Pages;

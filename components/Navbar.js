import React, { useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = (section) => {
    setActiveSection(section);
  
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id ${section} not found.`);
    }
  };
  return (
    <div className='navbar-container'>
     <div className='navbar'>
        <a
          className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => handleClick('home')}
          href=''
        >
          Home
        </a>
        {/* <a
          className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleClick('about')}
          href='#about'
        >
          About
        </a> */}
        <a
          className={`nav-item ${activeSection === 'resume' ? 'active' : ''}`}
          onClick={() => handleClick('resume')}
          href='#resume'
        >
          Resume
        </a>
        <a
          className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleClick('portfolio')}
          href='#portfolio'
        >
          Portfolio
        </a>
      </div>
  </div>
  )
}

export default Navbar
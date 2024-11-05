import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './nav.css';
import logoimg from '../images/app.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logoimg} alt="Mule Med" />
      </Link>

      <ul className="navbar-menu">
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/works" onClick={closeMenu}>Works</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
      </ul>

      <a 
        href="https://wa.me/+256776662314" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn" 
        id="chatMe"
      >
        Let's Chat
      </a>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <div className="mobile-menu-header">
          <h2>Navigation</h2>
          <span className="close-toggle" onClick={closeMenu}>✕</span>
        </div>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/works" onClick={closeMenu}>Works</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        
        
        <h3>
          <a href="mailto:muleof2000@gmail.com" id="sendEmail">muleof2000@gmail.com</a>
        </h3>
      </div>
    </div>
  );
};

export default Nav;

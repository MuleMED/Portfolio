import React from 'react';
import './home.css';
import halfimage from '../images/passimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCode, faWrench, faEnvelope, faPager, faProjectDiagram, faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
  setIsMenuOpen(false);
};

const Home = () => {
  return (
    <div className="wrapper">
      <div className="heada just-mid">
      
  <div className="item item1"><h4>Welcome </h4></div>
  <div className="item item2"><h4>logo Designing</h4></div>
  <div className="item item3"><h4>Flyers & Posters</h4></div>
  <div className="item item4"><h4>Web Designing</h4></div>
  <div className="item item5"><h4>Data Visualization </h4></div>
  <div className="item item6"><h4>UI & UX Design</h4></div>
  <div className="item item7"><h4>Brand Marketing</h4></div>
  <div className="item item8"><h4>Trending</h4></div>


     
      </div>
      <div className="main-section">
        <div className="content1">
          <img src={halfimage} alt="" />
        </div>
        <div className="content2">
          <div className="subcontent1">
            <div>
              <div>
              <h4>Hello,</h4>
            <h1>Mule Med</h1>
            <h2>Creative Director</h2>
            <p>
              My focus is on creating impactful digital solutions—from concept to launch—that combine technical expertise with user-centered design, helping brands and organizations thrive in the digital space.
            </p>
              </div>
            </div>
            
          </div>
          <div className="subcontent2">
            <div className='hov'>
            <Link to="/services" onClick={closeMenu}>
              <div className='icon'>
                
                  <FontAwesomeIcon icon={faDatabase} size="2x" />
              
                  
                  <FontAwesomeIcon icon={faCode} size="2x" />
              
                  <FontAwesomeIcon icon={faDesktop} size="2x" />
  
              </div>
              <div><h3>Services</h3></div>
              </Link>
              </div>
            <div className='hov'>
              <Link to="/works" onClick={closeMenu}>
            <div className='icon'>
              <FontAwesomeIcon icon={faPager} size="2x" />

            </div>
            <div>
              <h3>Projects</h3>
            </div>
            </Link>
              
      
            </div>
          </div>
        </div>
      </div>
      <div className="last">
        <h3 >
          Send a message or email on: +256 776 66234  or muleof2000@gmail.com
        </h3>
      </div>
          
    </div>
  );
};

export default Home;

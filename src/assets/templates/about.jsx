import React from 'react';
import './about.css';
import myimage from '../images/myimage.png';
import ps from '../icons/ps.png';
import figma from '../icons/figma.png';
import rstudio from '../icons/rstudio.png';
import blender from '../icons/blender.png';
import vs from '../icons/vs.png';

const About = () => {
  return (
    <div className="about">
      <div className="my-img">
        <img src={myimage} alt="my half body image from head to almost knees" className="my-image" />
      </div>
      <div className="text">
        <div className="aboutme">
          <h2>About Me</h2>
          <p>
            I’m a creative developer and data analyst, combining my skills in design, programming, and data science to help brands and organizations thrive in the digital space. Currently pursuing a Bachelor of Applied Computing Technology (BACT) at Clarke International University, I’m also enrolled in Harvard’s CS50 Introduction to Computer Science on EdX and ALX Africa’s Data Analytics program, further deepening my expertise.
          </p>
          <p>
            With a strong foundation in React, JavaScript, Python, R, C, SQL, HTML, and CSS, I bring technical versatility to every project. My work spans web development, graphic design, and data analysis, where I focus on creating user-friendly, visually compelling experiences. I’ve worked with teams to design solutions that align with business goals, ensuring projects are impactful from concept to completion.
          </p>
          <p>
            One of my current projects involves building an AI-powered chatbot for mental health management in Uganda, where I apply my skills in both software development and culturally aware design. I am passionate about leveraging technology to deliver meaningful and accessible solutions that make a real difference.
          </p>
          <p>
            I am currently seeking opportunities to collaborate with innovative companies in the tech and data analytics sectors, and I am excited to explore new opportunities in the future.
          </p>
          <p className="subtxt">
            "My focus is on creating impactful digital solutions—from concept to launch—that combine technical expertise with user-centered design, helping brands and organizations thrive in the digital space."
          </p>
        </div>

        <div className="tools">
          <h3>Frequently Used Tools</h3>
          <ul>
            <li><img src={ps} alt="Photoshop" /></li>
            <li><img src={vs} alt="VS Code Studio" /></li>
            <li><img src={figma} alt="Figma" /></li>
            <li><img src={rstudio} alt="Rstudio" /></li>
            <li><img src={blender} alt="Blender" /></li>
          </ul>
        </div>

        <div className="chatme">
          <p className="subtxt">Reach out to get the conversation started about your digital design needs.</p>
          <a 
            className="btn"
            href="https://wa.me/256776662314" 
            target="_blank" 
            rel="noopener noreferrer" 
            id="chatMe"
          >
            WhatsApp Me
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;

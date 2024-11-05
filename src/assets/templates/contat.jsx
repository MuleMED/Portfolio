import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact_text">
        <h2>Let's connect for a project <span>Together</span></h2>

        <div className="social_handles">
          <div className="email_contact">
            <h5>EMAIL ME</h5>
            <a href='mailto:muleof2000@gmail.com' id='sendEmail'>muleof2000@gmail.com</a>
          </div>

          <div className="media">
            <h5>SOCIALS</h5>
            <a href='https://x.com/MuleMun97/' target='_blank' rel="noopener noreferrer">Twitter</a>
            <a href='https://www.facebook.com/profile.php?id=61550872800513' target='_blank' rel="noopener noreferrer">Facebook</a>
            <a href='https://www.linkedin.com/in/mule-of-2000/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
          </div>

          <div className="phone_contact">
            <h5>CALL ME</h5>
            <a href='tel:+256776662314'>+256 776 662 314</a>
          </div>
        </div>

        <div className="contact_form">
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <p>This field is required. *</p>
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" placeholder='Subject' required />
            <textarea name="message" placeholder="Your Message" />
            <button type="submit">SEND</button>
          </form>
        </div>

        <h3>Will definitely get back to you within 24hrs. *</h3>
      </div> 
    </div>
  );
};

export default Contact;

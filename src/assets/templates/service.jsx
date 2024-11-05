import React, { useState } from 'react';
import './service.css';

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="service_section">
      <h2>Services I Provide</h2>
      <div className="service_grid">
        <div className="service_item">
          <h3>Web Development</h3>
          <p>
            I help you build a website that is user-friendly, responsive, and SEO-friendly. 
            I also provide guidance on optimizing your website for search engines.
          </p>
        </div>

        <div className="service_item">
          <h3>Graphics Design</h3>
          <p>
            I specialize in creating visually appealing and engaging graphics for your brand,
            product, or service. I can create logos, flyers, posters, and other visual elements.
          </p>
        </div>
        <div className="service_item">
                <h3>Branding</h3>
                <p>
                    I help you create a unique and memorable brand identity for your business.
                    I can create logos, business cards, and other branding materials.

                </p>
            </div>

        <div className="service_item">
          <h3>Data Analysis</h3>
          <p>
            I help you analyze and interpret data to make informed decisions and improve your business.
            I can provide insights on your website traffic, sales, customer behavior, and more.
          </p>
        </div>
      </div>

      <div className="FAQ">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div className="faq_item" key={index}>
            <h3 onClick={() => toggleFAQ(index)}>
              {item.question}
            </h3>
            {activeIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

// FAQ Data
const faqData = [
  {
    question: 'What type of projects can I work on?',
    answer: 'I can help with all types of projects, from small business websites to large-scale, complex applications. I\'m always here to help you with your needs.',
  },
  {
    question: 'How long does it usually take to get my project done?',
    answer: 'It usually takes me 2-4 weeks to get your project done. However, I\'m always here to help you with any questions or concerns you may have.',
  },
  {
    question: 'What are some of the best ways to collaborate with me?',
    answer: 'I encourage collaboration with others and I\'m always here to help you with any questions or concerns you may have. This includes creating new projects together.',
  },
];
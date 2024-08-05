import React, { useState } from 'react';
import './style.scss';
import { IoStarSharp } from "react-icons/io5";


const testimonials = [
  {
    name: 'Arian',
    image: '/arian.webp',
  },
  {
    name: 'Amanda',
    image: '/amanda.webp',
  },
  {
    name: 'Paul',
    image: '/paul.webp',
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  return (
    <div className="testimonial-section">
      <div className="testimonial-content">
        <div className="testimonial-card">
          <img src={selectedTestimonial.image} alt={selectedTestimonial.name} />
        </div>
        <div className="testimonial-buttons">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.name}
              className={testimonial.name === selectedTestimonial.name ? 'active' : ''}
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              {testimonial.name}
            </button>
          ))}
        </div>
      </div>
      <div className="side-content">
        <h2>Find out why we're better.</h2>
        <button className="stories-button">See all our stories</button>
        <div className="trustpilot">
          <IoStarSharp size="1.5rem" color='004733'/>
          <span className="trustpilot-rating"><b>TrustPilot </b>Excellent 4.3 out of 5</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

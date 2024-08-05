import React, { useState } from 'react';
import './about.scss';
import Navbar from '../Navbar/Navbar';
import Timeline from './timeline/Timeline'

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.className === 'modal') {
      setModalOpen(false);
    }
  };

  return (
    <div className='about'>
      <Navbar color='white' />
      <div className='head-section'>
        <p className='title'>Our mission</p>
        <p className='subtitle'>
          We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
        </p>
      </div>
      <div className='status-quo'>
        <div className='text'>
          <h2>The status quo is broken</h2>
          <p>
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className='cta-button'>Read Vishal's story</button>
        </div>
        <div className='image' onClick={handleImageClick}>
          <img src='/vishal-mission.jpg' alt='Vishal Garg' />
          <div className='play-button'>
            <span>▶</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='modal' onClick={closeModal}>
          <div className='modal-content'>
            <iframe
              src='https://www.youtube.com/embed/1KjYlLBM9j4'
              title='Vishal Garg'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className='change'>
      <div className='changing-things'>
        <h2>How we’re changing things</h2>
        <p>
          Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
        </p>
        <p>
          That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>
      </div>
      {/* <Timeline/> */}
    </div>
  );
};

export default About;

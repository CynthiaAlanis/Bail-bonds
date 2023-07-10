import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './AboutSection.css';

function AboutSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/About.mp4' autoPlay loop muted />
     
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default AboutSection;
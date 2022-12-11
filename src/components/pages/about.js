import React from 'react';
// import '../../styles/Mystyles.css';
import image from '../../images/Nelson.jpeg'


function About() {
  return (
    <>
      <div>
        <h1 className='pageTitle'>About Me</h1>
        <div className='myContent'>
          <img src={image} alt="Logo" width="10%" />
        </div>
        <p>
          I am a SaaS professional who loves all things Tech. From building custom PC's for the last 10 years to now web development.  I am attending a Full Stack Developer bootcamp and set to graduate in mid-December 2022. I am beginning my search for junior web developer roles and would love to hear from you.
        </p>

      </div>
    </>

  )
}

export default About;

import React, { useRef } from 'react';
import HeroSection from './herosection';
import FeaturesSection from './futuresection';
import Inshining from './inshining';
import AboutSection from './other';
import "../../styles/App.css";
import Section from './trading';
import TestimonialSlider from './reviews';

function About() {
  const aboutRef = useRef(null); 
  const sectionRef = useRef(null); 
  const sectionRef2 = useRef(null); 

  return (
    
      <div className="App">
      
        <HeroSection />
            <>
              <FeaturesSection 
                scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })} 
                scrollToAbout1={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })} 
                scrollToAbout2={() => sectionRef2.current.scrollIntoView({ behavior: 'smooth' })} 
              />
              <Inshining />
              <div ref={aboutRef}>
                <AboutSection />
              </div>
              <div ref={sectionRef}>
                <Section />
              </div>
              <div ref={sectionRef2}>
              <TestimonialSlider/>
              </div>
            </>
      
      </div>
   
  );
}

export default About;

import React, { useRef, useState } from 'react';
import "../../styles/HeroSection.css";

const HeroSection = () => {
  const videoRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false); 

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play(); 
      setIsPlaying(true);
      setIsVideoVisible(true); 
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false); 
    setIsVideoVisible(false); 
  };

  return (
    <div className="hero-container">
      <img src="/Design sans titre12.png" alt="Hero Background" className="hero-image" />
      <div className="overlay">
        <h1>The leading B2B ecommerce platform for global trade</h1>
        <div className="video-container">
        Learn about Megashop.com<video
            ref={videoRef}
            loop={false} 
            className={`hero-video ${isVideoVisible ? '' : 'hidden'}`} 
            onEnded={handleVideoEnd} 
          >
            <source src="/instagram animation.mp4" type="video/mp4" />
          </video>
          <div className="video-icon" onClick={handlePlayPause}>
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
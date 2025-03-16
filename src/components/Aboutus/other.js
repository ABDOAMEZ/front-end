import React, { useRef, useState } from "react";
import "../../styles/other.css";

const AboutSection = ({ scrollToFeatures }) => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isVideoVisible1, setIsVideoVisible1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isVideoVisible2, setIsVideoVisible2] = useState(false);

  const handleVideoEnd1 = () => {
    setIsPlaying1(false);
    setIsVideoVisible1(false);
  };

  const handlePlayPause1 = () => {
    if (videoRef1.current.paused) {
      videoRef1.current.play();
      setIsPlaying1(true);
      setIsVideoVisible1(true);
    } else {
      videoRef1.current.pause();
      setIsPlaying1(false);
    }
  };

  const handleVideoEnd2 = () => {
    setIsPlaying2(false);
    setIsVideoVisible2(false);
  };

  const handlePlayPause2 = () => {
    if (videoRef2.current.paused) {
      videoRef2.current.play();
      setIsPlaying2(true);
      setIsVideoVisible2(true);
    } else {
      videoRef2.current.pause();
      setIsPlaying2(false);
    }
  };

  return (
    <div className="about-section">
      <h1>Trade with confidence from production quality to purchase protection</h1>
      <div className="about-grid">
        <div onClick={scrollToFeatures} className="about-card">
          <p>Ensure production quality with</p>
          <h2 className="text-blue-500">
            <i className="fas fa-check" id="icon1"></i>Verified Supplier
          </h2>
          <p>
            Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the
            "Verified" logo to begin sourcing with experienced suppliers your business could rely on.
          </p>
          <div className="video-container">
            <video
              ref={videoRef1}
              loop={false}
              className={`hero-video ${isVideoVisible1 ? '' : 'hidden'}`}
              onEnded={handleVideoEnd1}
            >
              <source src="/instagram animation.mp4" type="video/mp4" />
            </video>
            {!isPlaying1 && !isVideoVisible1 && (
              <button className="video-button" onClick={handlePlayPause1}>
                Watch Video
              </button>
            )}
          </div>
        </div>
        <div onClick={scrollToFeatures} className="about-card">
          <p>Protect your purchase with</p>
          <h2 className="text-yellow-400">
            <i className="fas fa-usd" id="icon2"></i>Trade Assurance
          </h2>
          <p>
            Source confidently with access to secure payment options, protection against product or shipping issues,
            and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.
          </p>
          <div className="video-container">
            <video
              ref={videoRef2}
              loop={false}
              className={`hero-video ${isVideoVisible2 ? '' : 'hidden'}`}
              onEnded={handleVideoEnd2}
            >
              <source src="/instagram animation.mp4" type="video/mp4" />
            </video>
            {!isPlaying2 && !isVideoVisible2 && (
              <button className="video-button" onClick={handlePlayPause2}>
                Watch Video
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

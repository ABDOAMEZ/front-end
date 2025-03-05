import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState("cookie-banner");

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner("cookie-banner show");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleSettings = () => {
    alert("Open cookie settings modal here!");
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "not accepted");
    setShowBanner(false);
  };


  // console.log(window.navigator)

  return (
    showBanner && (
      <div className={showBanner}>
        <h1 className="cookie-title">
        🍪
        Our Cookies Policy
        </h1>
        <div>
        <p className="cookie-text">
           We use cookies to enhance your browsing experience, serve personalized ads, and analyze site traffic.
        </p>
        <div className="cookie-buttons">
          <button onClick={handleSettings} className="cookie-settings">
            Settings
          </button>
          <button onClick={handleAccept} className="cookie-accept">
            Accept
          </button>
          <button onClick={handleDecline} className="cookie-decline">
            Decline
          </button>
        </div>
        </div>
      </div>
    )
  );
};

export default CookieConsent;



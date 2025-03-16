import React from 'react';
import "../../styles/FeaturesSection.css";
const FeaturesSection = ({ scrollToAbout ,scrollToAbout1 , scrollToAbout2} ) => {
  return (
    <div className="features-container">
      <div className="feature" onClick={scrollToAbout}>
        <div className="feature-icon">
          <i className="fas fa-globe"></i>
        </div>
        <h2>Millions of business offerings</h2>
        <p>Explore products and suppliers for your business from millions of offerings worldwide.</p>
      </div>
      <div className="feature" onClick={scrollToAbout}>
        <div className="feature-icon">
          <i className="fas fa-shield-alt"></i> 
        </div>
        <h2>Assured quality and transactions</h2>
        <p>Ensure production quality from verified suppliers, with your orders protected from payment to delivery.</p>
      </div>
      <div className="feature" onClick={scrollToAbout1}>
        <div className="feature-icon">
          <i className="fas fa-shopping-cart"></i> {/* Icon for "One-stop trading solution" */}
        </div>
        <h2>One-stop trading solution</h2>
        <p>Order seamlessly from product/supplier search to order management, payment, and fulfillment.</p>
      </div>
      <div className="feature" onClick={scrollToAbout2}>
        <div className="feature-icon">
          <i className="fas fa-star"></i> 
        </div>
        <h2>Tailored trading experience</h2>
        <p>Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;

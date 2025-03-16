import React from 'react';
import '../../styles/categoriesDeals.css';

const AllExpress = () => {
  const bulkPricing = [
    { price: 'MAD251.95', quantity: '>5 pcs' },
    { price: 'MAD99.03', quantity: '>3 pcs' },
  ];

  const deliveryOptions = [
    { price: 'MAD159.94', original: 'MAD363.51', time: 'Ships in 2 days' },
    { price: 'MAD93.29', original: 'MAD194.36', time: 'Ships in 2 days' },
  ];

  const buyAgainItems = [
    { price: 'MAD158.17', original: 'MAD316.35' },
    { price: 'MAD116.02', original: 'MAD203.53' },
  ];

  return (
    <div className="allexpress-container">
      <h1>MegaShop</h1>
      
      <div className="business-section">
        <h2>MegaShop Categories</h2>
        <div className="business-card">
          <h3>MegaShop Business</h3>
          <ul>
            <li>Tax exemptions</li>
            <li>Express Payments</li>
            <li>Financial Support</li>
          </ul>
        </div>
      </div>
{/*  */}
      <div className="pricing-section">
        <h3>Buy in bulk</h3>
        {bulkPricing.map((item, index) => (
          <div key={index} className="price-card">
            <div className="price-group">
              <span className="current-price">{item.price}</span>
              <span className="quantity">each</span>
            </div>
            <div className="quantity-condition">{item.quantity}</div>
          </div>
        ))}
        <div className="retail-price">Retail: MAD101.01</div>
      </div>

      <div className="delivery-section">
        {deliveryOptions.map((item, index) => (
          <div key={index} className="delivery-card">
            <div className="price-group">
              <span className="current-price">{item.price}</span>
              <span className="original-price">{item.original}</span>
            </div>
            <div className="delivery-time">{item.time}</div>
          </div>
        ))}
      </div>

      <div className="stats-section">
        <div className="stats-card">
          <h3>AllExpress Business</h3>
          <div className="stats-value">20M+</div>
          <div className="stats-label">Value dropshipping items</div>
        </div>
        
        <div className="stats-card">
          <h3>Local warehouse worldwide</h3>
          <div className="stats-value">24H</div>
          <div className="stats-label">Personalized sourcing service</div>
        </div>
      </div>

      <div className="buy-again-section">
        <h3>Buy again</h3>
        {buyAgainItems.map((item, index) => (
          <div key={index} className="buy-again-card">
            <div className="price-group">
              <span className="current-price">{item.price}</span>
              <span className="original-price">{item.original}</span>
            </div>
            <div className="popular-tag">Popular picks</div>
          </div>
        ))}
      </div>

      <div className="search-container">
        <input type="text" placeholder="Type here to search" className="search-input" />
      </div>
    </div>
  );
};

export default AllExpress;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DealsSection.css";
import { Link } from "react-router-dom";

const DealsSection = ({ title, icon, deals }) => {
  return (
    <div className="deals-container">
      <h2 className="deals-title">
        {title} <span className="icon">{icon}</span>
      </h2>

      <Swiper
        spaceBetween={15}
        slidesPerView={2} // يظهر منتجين فقط بشكل افتراضي
        breakpoints={{
          640: { slidesPerView: 2 }, // للهواتف يظهر منتجين فقط
          768: { slidesPerView: 2 }, // للأجهزة اللوحية يظهر منتجين فقط
          992: { slidesPerView: 2 }, // للابتوب يظهر منتجين فقط
        }}
        navigation
        modules={[Navigation]}
      >
        {deals.map((deal, index) => (
          <SwiperSlide key={index} className="deal-card">
            <div title={deal.name} className="item">
            <Link>
            <img src={deal.image} alt={deal.name} className="deal-image" />
            <h3 className="deal-name">{deal.name.length >= 13 ? deal.name.slice(0, 8) + "..." : deal.name}</h3>
            <p className="deal-price">MAD{deal.price}</p>
            <p className="deal-old-price">MAD{deal.oldPrice}</p>
            <p className="deal-discount">-{deal.discount}%</p>
            </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DealsSection;

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/HomeSlider.css";

const Sliders = () => {
  // Images Array
  const images = [
    require("../../assets/images/bg-1r.jpg"),
    require("../../assets/images/bg-2.jpg"),
    require("../../assets/images/bg-3.jpg"),
    require("../../assets/images/bg-4.jpg"),
    require('../../assets/images/p1.jpg'),
    require('../../assets/images/p2.webp'),
    require('../../assets/images/p3.jpg'),
    require('../../assets/images/p4.webp'),
    require('../../assets/images/t1.webp'),
    require('../../assets/images/t2.webp'),
    require('../../assets/images/t3.webp'),
    require('../../assets/images/t4.webp'),
  ];

  return (
    <>
      <div className="homeMain">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="slides"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
           <div className="slide">
          <Link>
          <img src={img} alt={`Slide ${index + 1}`} className="slide-img" />
          </Link>
           </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="btnsLeft-right">
        <button className="prev">
          <GrFormPrevious className="icon" />
        </button>
        <button className="next">
          <GrFormNext className="icon" />
        </button>
      </div>
    </div>

    <div className="smallScreens">
      <div className="smallScreens-container">
      <Link to={'./ksk'}>
       <h1>Fresh Products Picks</h1> 
       <p>
        Save on classic and trending product items for 
       </p>
       
       <button>
        Shop now
       </button>
       </Link>
      </div>
    </div>
    </>
  );
};

export default Sliders;

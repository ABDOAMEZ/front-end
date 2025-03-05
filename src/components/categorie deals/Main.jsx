import React from 'react';
import'../../styles/categoriesDeals.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const CategoryDeals = () => {
  return(
    <main>
      <div className="main-container">
        <div className="main_top-container">
          <div className="main_top-left">
            <img src="" alt="" />
            <div className="caracterstiques">
              <p>
              <span className="i8DsV z1asCe MBDXof" ><svg focusable="false" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M19,2h-5.87c-0.8,0-1.56,0.32-2.12,0.88l-8.13,8.13c-1.17,1.17-1.17,3.07,0,4.24l5.87,5.87C9.34,21.71,10.11,22,10.87,22 s1.54-0.29,2.12-0.88L21.12,13c0.56-0.56,0.88-1.33,0.88-2.12V5C22,3.34,20.66,2,19,2z M20,10.88c0,0.27-0.1,0.52-0.29,0.71 l-8.13,8.12C11.33,19.97,11.03,20,10.87,20s-0.45-0.04-0.71-0.29l-5.87-5.87C4.04,13.58,4,13.29,4,13.13s0.04-0.45,0.29-0.71 l8.13-8.13C12.61,4.1,12.87,4,13.13,4H19c0.55,0,1,0.45,1,1V10.88z"></path><circle cx="16.5" cy="7.5" r="1.5"></circle></g></g></svg></span>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryDeals;

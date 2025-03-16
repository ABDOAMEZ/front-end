import React, { useState } from "react";
import "../../styles/reviews.css";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
      name: "Eva Jane",
      position: "Founder of Eva Jane Beauty",
      image: "/p2.jpeg", 
      text: "As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. MegaShop.com has been my trusted partner in this process."
    },
    {
      name: "John Doe",
      position: "CEO of Tech Solutions",
      image: "/p1.jpeg",
      text: "MegaShop.com has provided me with a seamless experience in sourcing products for my business. Their services are unmatched."
    },
    {
      name: "Ilias",
      position: "Content Creator",
      image: "/ana v2.jpeg",
      text: " MegaShop.com help me so much when i want buy a product , for devloppe my materialles"
    },
    {
      name: "Abdo",
      position: "Inginieur Softwear",
      image: "/abdo.jpeg",
      text: " The best service MegaShop.com with a hight resolution ."
    },
    {
      name: "Mohamed",
      position: "Grafic Designer",
      image: "/jelouli v2.jpeg",
      text: "MegaShop.com nice work in the design and what you need you can find it here ."
    },
  ];
  
  const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);
  
    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="testimonial-slider">
        <motion.button 
          className="prev" 
          onClick={prevSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          ❮
        </motion.button>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="testimonial-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={testimonials[current].image} 
              alt={testimonials[current].name} 
              className="testimonial-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="testimonial-text">
              <h2 className="testimonial-name">{testimonials[current].name}</h2>
              <p className="testimonial-position">{testimonials[current].position}</p>
              <p className="testimonial-quote">“{testimonials[current].text}”</p>
            </div>
          </motion.div>
        </AnimatePresence>
  
        <motion.button 
          className="next" 
          onClick={nextSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          ❯
        </motion.button>
      </div>
    );
  };
  
  export default TestimonialSlider;
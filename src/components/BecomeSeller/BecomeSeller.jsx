import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/beseller.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.7 }}
      className="seller-content"
    >
      <div className="seller-text">
        <h1>Grow Your Business with Alibaba</h1>
        <p>Join millions of successful sellers and expand your market globally.</p>
        localStorage.getItem("USER_ACCESS_TOKEN'")?
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/Simple_form")}
          className="btn-seller"
        >
          Become a seller
        </motion.button>
      </div>
      <motion.div
        className="seller-image"
        initial={{ scale: 1, filter: "blur(0px)" }}
        animate={{ scale: 1.05, filter: "blur(5px)" }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src='https://www.bams.com/wp-content/uploads/2022/03/70791987_s.jpg'
          // src={require('../../assets/images/create your business.jpg')}
          alt="Business Seller"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}
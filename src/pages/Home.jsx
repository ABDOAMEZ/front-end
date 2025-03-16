import React from 'react';
import '../App.css';
import Slider from '../components/SlidersbgHome/Sliders';
import DealsMain from '../components/Todays deals/DealsMain';
import CookieConsent from '../components/CookieConsent/CookieConsent';
import Main from '../components/categorie deals/Main';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation();
  const receivedData = location.state;

  // console.log('home: ' + receivedData);


  return (
    <section>
       <Slider  />
       <DealsMain />

       <Main />

       <CookieConsent />
    </section>
  )
}

export default Home;

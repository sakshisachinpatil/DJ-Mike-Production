import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesButton from '../components/ServicemainPage/ServicesButton';
import ImageSlider from '../components/ServicemainPage/ImageSlider';
import { pictures } from '../components/ServicemainPage/ImageData';
import ServicetextOne from '../components/ServicemainPage/ServicetextOne';
import ServicetextTwo from '../components/ServicemainPage/ServicetextTwo';
// import Services from '../components/Services';

const ServicemainPage = () => {
  return (
    <div>
      <Navbar/>
      <ServicesButton/>
      <ServicetextOne/>
      <ImageSlider images={pictures}/>
      <ServicetextTwo/>
      <Footer/> 
    </div>
  )
}

export default ServicemainPage;

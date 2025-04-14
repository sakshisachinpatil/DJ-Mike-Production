import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import CommonHero from '../components/ServicemainPage/SpecificEvents/AllEventsHero';
import EventNavbar from '../components/ServicemainPage/SpecificEvents/EventNavbar';
import WeddingCard from '../components/ServicemainPage/EventPackages/WeddingCard';
import PackageInfo from '../components/ServicemainPage/SpecificEvents/PackageInfo';
import WeddingForm from '../components/ServicemainPage/EventForms/WeddingForm';

const WeddingEvent = () => {
  return (
    <div>
      <Navbar/>
      <CommonHero/>
      <EventNavbar/>
      <PackageInfo/>
      <WeddingCard/>
      <WeddingForm/>
    </div>
  )
}

export default WeddingEvent;
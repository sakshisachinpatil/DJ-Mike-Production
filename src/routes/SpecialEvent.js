import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import CommonHero from '../components/ServicemainPage/SpecificEvents/AllEventsHero';
import EventNavbar from '../components/ServicemainPage/SpecificEvents/EventNavbar';
import SpecialCard from '../components/ServicemainPage/EventPackages/SpecialCard';
import PackageInfo from '../components/ServicemainPage/SpecificEvents/PackageInfo';
import SpecialForm from '../components/ServicemainPage/EventForms/SpecialForm';

const SpecialEvent = () => {
  return (
    <div>
      <Navbar/>
      <CommonHero/>
      <EventNavbar/>
      <PackageInfo/>
      <SpecialCard/>
      <SpecialForm/>
    </div>
  )
}

export default SpecialEvent;
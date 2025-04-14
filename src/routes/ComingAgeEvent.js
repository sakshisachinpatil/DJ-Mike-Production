import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import CommonHero from '../components/ServicemainPage/SpecificEvents/AllEventsHero';
import EventNavbar from '../components/ServicemainPage/SpecificEvents/EventNavbar';
import ComingAgeCard from '../components/ServicemainPage/EventPackages/ComingAgeCard';
import PackageInfo from '../components/ServicemainPage/SpecificEvents/PackageInfo';
import ComingAgeForm from '../components/ServicemainPage/EventForms/ComingAgeForm';
import CommonForm from '../components/ServicemainPage/SpecificEvents/CommonForm';


const ComingAgeEvent = () => {
  return (
    <div>
      <Navbar/>
      <CommonHero/>
      <EventNavbar/>
      <PackageInfo/>
      <ComingAgeCard/>
      <ComingAgeForm/>
      <CommonForm/>
    </div>
  )
}

export default ComingAgeEvent;
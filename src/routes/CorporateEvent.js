import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import CommonHero from '../components/ServicemainPage/SpecificEvents/AllEventsHero';
import EventNavbar from '../components/ServicemainPage/SpecificEvents/EventNavbar';
import CorporateCard from '../components/ServicemainPage/EventPackages/CorporateCard';
import PackageInfo from '../components/ServicemainPage/SpecificEvents/PackageInfo';
import CorporateForm from '../components/ServicemainPage/EventForms/CorporateForm';


const CorporateEvent = () => {
  return (
    <div>
      <Navbar/>
      <CommonHero/>
      <EventNavbar/>
      <PackageInfo/>
      <CorporateCard/>
      <CorporateForm/>
    </div>
  )
}

export default CorporateEvent;

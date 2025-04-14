import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import CommonHero from '../components/ServicemainPage/SpecificEvents/AllEventsHero';
import EventNavbar from '../components/ServicemainPage/SpecificEvents/EventNavbar';
import SchoolCard from '../components/ServicemainPage/EventPackages/SchoolCard';
import PackageInfo from '../components/ServicemainPage/SpecificEvents/PackageInfo';
import SchoolForm from '../components/ServicemainPage/EventForms/SchoolForm';

const SchoolEvent = () => {
  return (
    <div>
      <Navbar/>
      <CommonHero/>
      <EventNavbar/>
      <PackageInfo/>
      <SchoolCard/>
      <SchoolForm/>
    </div>
  )
}

export default SchoolEvent;

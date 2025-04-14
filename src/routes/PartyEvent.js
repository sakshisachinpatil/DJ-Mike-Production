import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import CommonHero from '../components/ServicemainPage/SpecificEvents/AllEventsHero';
import EventNavbar from '../components/ServicemainPage/SpecificEvents/EventNavbar';
import PartyCard from '../components/ServicemainPage/EventPackages/PartyCard';
import PackageInfo from '../components/ServicemainPage/SpecificEvents/PackageInfo';
import PartyForm from '../components/ServicemainPage/EventForms/PartyForm';

const PartyEvent = () => {
  return (
    <div>
      <Navbar/>
      <CommonHero/>
      <EventNavbar/>
      <PackageInfo/>
      <PartyCard/>
      <PartyForm/>
    </div>
  )
}

export default PartyEvent;
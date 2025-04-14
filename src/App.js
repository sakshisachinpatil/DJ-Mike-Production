import React from 'react';
import "./index.css";
import Homepage from "./routes/Homepage";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Servicemainpage from "./routes/Servicemainpage";
import { Route, Routes } from 'react-router-dom';
import Gallery from './routes/Gallery';
import CorporateEvent from "./routes/CorporateEvent";
import PartyEvent from './routes/PartyEvent';
import ComingAgeEvent from './routes/ComingAgeEvent';
import SpecialEvent from './routes/SpecialEvent';
import WeddingEvent from './routes/WeddingEvent';
import SchoolEvent from './routes/SchoolEvent';
import GalleryGrid from './components/GalleryPage/GalleryGrid';

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/servicemainpage" element={<Servicemainpage/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/corporateevent" element={<CorporateEvent/>}/>
      <Route path="/partyevent" element={<PartyEvent/>}/>
      <Route path="/comingofageevent" element={<ComingAgeEvent/>}/>
      <Route path="/specialevent" element={<SpecialEvent/>}/>
      <Route path="/weddingevent" element={<WeddingEvent/>}/>
      <Route path="/schoolevent" element={<SchoolEvent/>}/>
      <Route path="/gallerygrid" element={<GalleryGrid/>}/>
     </Routes>
     
    </div>
  );
}

export default App;

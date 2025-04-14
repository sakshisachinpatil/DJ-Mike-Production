import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryComp from '../components/GalleryPage/GalleryComp';
import Frame from '../components/GalleryPage/Frame';
import Reviews from '../components/GalleryPage/Reviews';

const Gallery = () => {
  return (
    <div>
      <Navbar/>
      <GalleryComp/>
      <Frame/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Gallery;

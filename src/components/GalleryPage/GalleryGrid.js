import React, { useState } from 'react';
import styled from 'styled-components';
import DataGrid from './DataGrid';
import './GalleryGrid.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Header = styled.div`
  text-align: left;
  padding: 32px;
  color: white;
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 4px;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  margin: 8px;
 
  img {
    display: block;
    width: 400px;
    height: 300px;
    object-fit: cover;
   
  }
`;

const Button = styled.button`
  margin: 2px;
  padding: 10px 20px;
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #777;
  }
`;

const categories = [
  { key: 'wedding', label: 'Wedding Event Photos' },
  { key: 'party', label: 'Party Event Photos' },
  { key: 'corporate', label: 'Corporate Event Photos' },
  { key: 'private', label: 'Private Event Photos' },
  { key: 'school', label: 'School Event Photos' },
  { key: 'celebration', label: 'Coming of Age Celebration Event Photos' }
  // Add more categories as needed
];

const GalleryGrid = () => {
  const [state, setState] = useState({
    category: 'wedding',
    heading: 'Wedding Event Photos'
  });

  const handleCategoryChange = (newCategory, newHeading) => {
    setState({
      category: newCategory,
      heading: newHeading
    });
  };

  return (
    <div className="parent-grid">
      <Navbar/>
      <Header>
        <h1 className='grid-title'><span>{state.heading}</span></h1>
      </Header>
      <div className="grid-button-row">
        {categories.map((category) => (
          <Button
            key={category.key}
            onClick={() => handleCategoryChange(category.key, category.label)}
          >
            {category.label}
          </Button>
        ))}
      </div>
      <Container>
        {DataGrid[state.category].map((image, idx) => (
          <ImageWrapper key={idx}>
           <img src={image.src} alt={image.alt} /> 
          </ImageWrapper>
        ))}
      </Container>
      <Footer/>
    </div>
  );
};

export default GalleryGrid;

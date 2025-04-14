import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import FeedbackSlider from './FeedbackSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let opinion = [
    {
        disc: 'DJ Mike is easy to work with. Everyone was on the dance floor! Excellent service with songs tailored to the crowd, from the entrance clips to the final song.'
    },
    {
        disc: 'People are still talking about how fun our wedding was! Made our wedding night one to remember!'
    },
    {
        disc: 'If you want a DJ that will be in sync with the vision of how you want your event to feel and sound, DJ Mike will exceed your expectations.'
    },
    {
        disc: 'DJ Mike is the only DJ we recommend to our brides at 2616 Commerce Event Center. He is very professional and has years of experience as a wedding DJ. Our brides are always very happy with him. He is a great DJ for any event you may be planning!'
    },
    {
        disc: 'People are still talking about how fun our wedding was! Made our wedding night one to remember!'
    },
    {
        disc: 'If you want a DJ that will be in sync with the vision of how you want your event to feel and sound, DJ Mike will exceed your expectations.'
    },
    {
        disc: 'DJ Mike is easy to work with. Everyone was on the dance floor! Excellent service with songs tailored to the crowd, from the entrance clips to the final song. People are still talking about how fun our wedding was! Made our wedding night one to remember'
    },
    {
        disc: 'People are still talking about how fun our wedding was! Made our wedding night one to remember!'
    },
    {
        disc: 'DJ Mike is the only DJ we recommend to our brides at 2016 Commerce Event Center. He is very professional and has years of experience as a wedding DJ. Our brides are always very happy with him. He is a great DJ for any event you may be planning!'
    },
    {
        disc: 'DJ Mike is easy to work with. Everyone was on the dance floor! Excellent service with songs tailored to the crowd, from the entrance clips to the final song.'
    },
    {
        disc: 'DJ Mike is easy to work with. Everyone was on the dance floor! Excellent service with songs tailored to the crowd, from the entrance clips to the final song. People are still talking about how fun our wedding was! Made our wedding night one to remember'
    },
    {
        disc: 'If you want a DJ that will be in sync with the vision of how you want your event to feel and sound, DJ Mike will exceed your expectations.'
    },
    
  ]


  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]};



const TestimonialSlide = () => {
    let opinionDisc = "";
    opinionDisc = opinion.map((item, i) => (
        <FeedbackSlider item={item} key={i}/>
    ))
  return (
    <Container>
        <span className="green" style={{color:"#20B9C3", fontSize:"1.5rem"}}>testimonials</span>
        <h1>what clients say</h1>
        <Testimonial>
            <Slider {...settings}>
                {opinionDisc}
            </Slider>
        </Testimonial>
    </Container>
  )
}

export default TestimonialSlide

const Container = styled.div`
    width: 80%;
    max-width: 1300px;
    margin: 0 auto 2rem auto;
    padding: 2rem 0 2rem 0;
    background-color: rgb(17, 17, 17);

    span{
        font-family: Raleway, sans-serif;
        padding-left: 1rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    
    h1{
        font-family: Raleway, sans-serif;
        padding-left: 1rem;
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }
`

const Testimonial = styled.div`
    marging-top: 2rem;
    position: relative;
`

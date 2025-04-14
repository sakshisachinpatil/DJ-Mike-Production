import React from 'react';
import styled from 'styled-components';
import {PiQuotesFill} from "react-icons/pi";

const FeedbackSlider = (props) => {
    const { disc } = props.item;
  return (
    <Container>
      <Header>
        <span className="quote"><PiQuotesFill/></span>
      </Header>
      <Body>
        {disc}
      </Body>
    </Container>
  )
}

export default FeedbackSlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45,45,58)0%, rgb(43,43,53)100%);
    padding: 0.5rem 1rem 1rem 1rem;
    margin: 0.5rem 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .quote{
        font-size: 3rem;
        color: whitesmoke;
        opacity: 0.7;
    }
`

const Body = styled.p`
    font-size: 0.9rem;
    margin-bottom: 1.5rem;

`

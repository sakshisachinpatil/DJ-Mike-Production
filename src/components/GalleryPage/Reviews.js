import "./ReviewsStyles.css";
import ReviewContent from "./ReviewContent.js";
import React from 'react';

const Reviews = () => {
  return (
    
    <div className="reviews-container">
        <h4 className="reviews-heading">Reviews</h4>
        <div className="reviews-placeholder">
            <p className="reviews-content"><ReviewContent/></p>
        </div>
    </div>
  )
}

export default Reviews;

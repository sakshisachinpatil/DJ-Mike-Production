import { useEffect, useRef, useState } from "react";
import "./ImageSliderStyles.css";

function ImageSlider({images}) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = useRef(null)
    useEffect(() => {
        timeOut.current = autoPlay && setTimeout(() => {
            slideRight();
        }, 2500)
    })

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

  return (
    <div className="slider" 
        onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut.current);
        }} 
        onMouseLeave={() => {
            setAutoPlay(true);
        }}
    >
        <div className="slider-wrapper">
            {images.map((image, index)=>{
                return(
                    <div key={index} className={index === current ? "slider-card slider-card-active" : "slider-card"}>
                        <img className="slider-image" src={image.image} alt="slide"/>
                        {/* <div className="card-overlay">
                            <h2 className="card-name">{image.title}</h2>
                        </div> */}
                    </div>
                );
            })}

            <div className="slider-arrow-left" onClick={slideLeft}>
                &lsaquo;
            </div>
            <div className="slider-arrow-right" onClick={slideRight}>
                &rsaquo;
            </div>
            <div className="slider-pagination">
                {images.map((_,index)=>{
                    return(
                        <div key={index} className={index === current ? "pagination-dot pagination-dot-active" : "pagination-dot"} onClick={() => setCurrent(index) }>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
}

export default ImageSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerData } from "./SliderData";
import {ArrowBackIos,ArrowForwardIos}from '@mui/icons-material'
const PreviousBtn=(props)=>{
  const{className,onClick}=props;
  return(
    <div className={className}>
      <ArrowBackIos onClick={onClick} style={{color:'black'}}/>
    </div>
  )
}
const NextBtn=(props)=>{
  const{className,onClick}=props;
  return(
    <div className={className}>
      <ArrowForwardIos onClick={onClick} style={{color:'black'}}/>
    </div>
  )
}
const Carousel = () => {
  return (
    <>
      <Slider
        autoplay
        autoplaySpeed={3000}
        infinite
        prevArrow={<PreviousBtn/>}
        nextArrow={<NextBtn/>}
      >
        {bannerData.map((item) => {
          return (
            <div>
              <img src={item.url} alt="" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Carousel;

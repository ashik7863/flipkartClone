import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { products } from "./MultiItemData";
import {ArrowBackIos,ArrowForwardIos}from '@mui/icons-material'
import Countdown from "react-countdown";
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
const MultiItemCorousel = ({products,title}) => {
  const renderer=({hours,minutes,seconds})=>{
    return(
      <div>
        {hours} : {minutes} : {seconds} Left
      </div>
    )
  }
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  return (
    <>
    <div className='slider'>
      <div className="multi-corousel">
        <div className="top-timeleft">
          <div className="deal-sec">{title}</div>
          <div className="timer">
            <img src={timerURL} alt="" />
            <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
          </div>
          <button>VIEW ALL</button>
        </div>
        <div>
        <Slider
        autoplay
        autoplaySpeed={3000}
        infinite
        prevArrow={<PreviousBtn/>}
        nextArrow={<NextBtn/>}
        slidesToShow={7}
      >
        {products.map((item) => {
          return (
            <div className="carousel-item">
              <Cart item={item}/>
            </div>
          );
        })}
      </Slider>
        </div>
      </div>
      </div>
    </>
  );
};
const Cart=({item})=>{
  return(
    <div className="corousel-image">
      <div className="short-title">
      <img src={item.url} alt="" />
      
        <div style={{fontWeight:600,color:'#212121'}}>{item.title.shortTitle}</div>
        <div style={{color:'#388e3c'}}>{item.discount}</div>
        <div style={{color:'#212121',opacity:'.6'}}>{item.tagline}</div>
      </div>
    </div>
  )
}
export default MultiItemCorousel;

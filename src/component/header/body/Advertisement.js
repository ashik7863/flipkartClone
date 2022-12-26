import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { products } from "./MultiItemData";
import {ArrowBackIos,ArrowForwardIos}from '@mui/icons-material'
import Countdown from "react-countdown";
import{Link}from 'react-router-dom'
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
const Advertisement = ({products,title,timer}) => {
  var settings = {
    // dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 7,
    // slidesToScroll: 3,
    // initialSlide: 0,
    // arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
    ],
  };
  const renderer=({hours,minutes,seconds})=>{
    return(
      <div>
        {hours} : {minutes} : {seconds} Left
      </div>
    )
  }
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  
    const imgurl = 'https://rukminim1.flixcart.com/fk-p-flap/464/708/image/8e99ee0939987d03.jpg?q=70';
  return (
    <div className='advertise'>
      <div className='first-sec'>
        {/* Start */}
        <div className='slider1'>
      <div className="multi-corousel">
        <div className="top-timeleft">
          <div className="deal-sec">{title}</div>
          {
            timer && <div className="timer">
            <img src={timerURL} alt="" />
            <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
          </div>
          }
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
        {...settings}
      >
        {products.map((item,idx) => {
          return (
            <Link to={`product/${item.id}`} key={idx}>
            <div className="carousel-item">
              <Cart item={item}/>
            </div>
            </Link>
          );
        })}
      </Slider>
        </div>
      </div>
      </div>
      {/* End */}
      </div>
      <div className='second-sec'>
        <img src={imgurl} alt="ad" style={{width:217}}/>
      </div>
    </div>
  )
}
const Cart=({item})=>{
  return(
    <div className="corousel-image">
      <div className="short-title">
      <img src={item.url} alt="" />
      
        <div style={{fontWeight:600,color:'#212121',textAlign:'center'}}>{item.title.shortTitle}</div>
        <div style={{color:'#388e3c'}}>{item.discount}</div>
        <div style={{color:'#212121',opacity:'.6',textAlign:'center'}}>{item.tagline}</div>
      </div>
    </div>
  )
}

export default Advertisement

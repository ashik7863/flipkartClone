import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import './sliderStyle.css'

const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider-image">
      <Carousel/>
      </div>
    </div>
  )
}

export default Slider
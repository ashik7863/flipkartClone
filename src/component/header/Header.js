import React from 'react'
import './HeaderStyle.css';
import Search from './Search';
import CustomButton from './CustomButton';

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <>
      <div className='parent-header'>
        <div className='logo-sec'>
            <img src={logoURL} alt="logo" />
            <div className='logo-bottom'>
                <span>Explore <span>Plus</span></span>
                <img src={subURL} alt="logo2" />
            </div>
        </div>
        <div className='search-container'>
            <Search/>
        </div>
        <div className='buttons'>
        <CustomButton/>
        </div>
      </div>
    </>
  )
}

export default Header
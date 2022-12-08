import React from 'react'
import{navData}from './NavbarData'
import './navbarStyle.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      {
        navData.map((menu)=>(
            <div>
                <img src={menu.url} alt={menu.text} style={{width:64}}/>
                <div>{menu.text}</div>
            </div>
        ))
      }
    </div>
  )
}

export default Navbar
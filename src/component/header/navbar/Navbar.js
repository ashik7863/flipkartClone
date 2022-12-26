import React from 'react'
import{navData}from './NavbarData'
import './navbarStyle.css';
const Navbar = () => {
  return (
    <div className='nav-header'>
      <div className='navbar'>
      {
        navData.map((menu,idx)=>(
            <div key={idx}>
                <img src={menu.url} alt={menu.text} style={{width:64}}/>
                <div>{menu.text}</div>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from './login/LoginDialog';

const CustomButton = () => {
  const[open,setOpen]=useState(false);
  return (
    <>
    <div className='btn-sec'>
      <div className='login' onClick={()=>setOpen(!open)}>Login</div><LoginDialog open={open} setOpen={setOpen}/>
    </div>
      <div>Become a Seller</div>
      <div>
        <div>More</div>
      </div>
      <div className='cart-sec'>
        <div><ShoppingCartIcon/></div>
        <div>Cart</div>        
      </div>
    </>
  )
}

export default CustomButton;
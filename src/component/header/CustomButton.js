import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CustomButton = () => {
  return (
    <>
    <div className='btn-sec'>
      <div className='login'>Login</div>
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
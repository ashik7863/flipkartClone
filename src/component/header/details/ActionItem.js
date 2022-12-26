import React from 'react'

const ActionItem = ({product}) => {
  return (
    <div className='main-image'>
      <img src={product.detailUrl} alt="pro" />
      <div className='image-button'>
        <button style={{background: '#ff9f00'}}>ADD TO CART</button>
        <button style={{background: '#fb641b'}}>BUY NOW</button>
      </div>
    </div>
  )
}

export default ActionItem

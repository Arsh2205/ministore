import React from 'react'
import './Sale.css'
import  {assets}  from '../../assets/assets'
function Sale() {
  return (
    <div className='sales'>
      <div className='sales-text'>
          <p>10% OFF</p>
          <h1>NEW YEAR SALES</h1>
          <button className='btn-shop'>SHOP PRODUCT</button>
        </div>
        <div>
          <img src={assets.singleimage1} alt="" />
        </div>
      </div>
      
  )
}

export default Sale

import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
function Header() {
  return (
    <div className='header'>
        <div className='header-text'>
          <h1>OUR GREAT PRODUCTS</h1>
          <button className='btn-shop'>SHOP PRODUCT</button>
        </div>
        <div>
          <img src={assets.bannerimage} alt="" />
        </div>
      </div>
      
    
  )
}

export default Header

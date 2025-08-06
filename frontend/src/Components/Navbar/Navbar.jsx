import React, {useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
function Navbar() {
  const[menu,setMenu]=useState("HOME")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("HOME")} className={menu==="HOME"?"active":""}>HOME</li>
        <li onClick={()=>setMenu("SERVICES")} className={menu==="SERVICES"?"active":""}><a href='#services'>SERVICES</a></li>
        <li onClick={()=>setMenu("PRODUCTS")} className={menu==="PRODUCTS"?"active":""}><a href='#products'>PRODUCTS</a></li>
        <li onClick={()=>setMenu("WATCHES")} className={menu==="WATCHES"?"active":""}><a href='#watches'>WATCHES</a></li>
        <li onClick={()=>setMenu("SALE")} className={menu==="SALE"?"active":""}><a href='#sale'>SALE</a></li>
        <li onClick={()=>setMenu("BLOG")} className={menu==="BLOG"?"active":""}><a href='#blog'>BLOG</a></li>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-basket-icon'>
            <img src={assets.basket} alt="" />
            <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar

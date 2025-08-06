import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Services from '../../Services/Services'
import MobileProducts from '../../MobileProducts/MobileProducts'
import WatchLists from '../../WatchLists/WatchLists'
import Sale from '../../Sale/Sale'
import Posts from '../../Posts/Posts'
import Subscribe from './../../Subscribe/Subscribe';
import Insta from './../../Insta/Insta';
import Footer from './../../Footer/Footer';
function Home() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Services/>
        <MobileProducts/>
        <WatchLists/>
      </div>
      <Sale/>
      <div className='container'>
        <Posts/>
      </div>
      <Subscribe/>
      <Insta/>
      <Footer/>
    </div>
  )
}

export default Home

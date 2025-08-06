import React from 'react'
import './Subscribe.css'
function Subscribe() {
  return (
    <div className='subscribe'>
        <div className="subscribe-text">
            <h3>Subscribe now</h3>
            <p>Get latest news, updates and deals directly mailed to your inbox</p>
        </div>
        <div className='subscribe-form'>
            <form>
                <input type="email" placeholder='Your email address here' />
                <button type="button" className='btn-subscribe'>Subscribe</button>
            </form>
        </div>
      
    </div>
  )
}

export default Subscribe

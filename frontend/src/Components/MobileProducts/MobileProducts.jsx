import React from 'react'
import {mobileProductsList} from '../../assets/assets'
import { Link } from 'react-router-dom'
import './MobileProducts.css'
function MobileProducts(){
   // console.log(mobileProductsList)
    return(
        <div className='mobile-product'>
            <div className='mobile-start-text'>
            <h2>mobile products</h2>
            <Link to="" className='gotoshop'>go to shop</Link>
            </div>

            <div className='mobile-product-data'>
                {
                    mobileProductsList.map((mobile=>{
                        return(
                            <div className='mobile-col' key={mobile.pid}>
                                <img src={mobile.pimage} alt=".." className='mobile-image'/>
                                <div className='mobile-text'>
                                    <p className='mobile-model'>{mobile.product}</p>
                                    <p className='mobile-price'>{mobile.price}</p>
                                </div>
                            </div>
                        )
                    }))
                }
            </div>
        </div>
    )
}


export default MobileProducts
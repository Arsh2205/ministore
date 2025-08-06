import React from 'react'
import './Insta.css'
import {instaList} from '../../assets/assets'

function Insta() {
    return(
        <div className='insta'>
        <div className='insta-text'>
            <h2>Shop our insta</h2>
        </div>
        <div className='insta-data'>
            {
                instaList.map((insta)=>{
                    return(
                        <div className='insta-image'>
                           <img src={insta.instaImage} alt="..."/>    
                        </div>                          
                    )
                })
            }
        </div>
    </div>
    )
}

export default Insta

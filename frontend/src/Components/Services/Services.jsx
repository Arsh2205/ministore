import React from 'react'
import './Services.css'
import { Services_list } from '../../assets/assets'

function Services() {
  return (
    <div className='services'>
        <div className='services-data'>
            {
                Services_list.map((list)=>{
                    return(
                        <div key={list.sid}>
                            <div className='col'>
                                {list.simage}
                                <p className='services-text'>{list.stitle}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services

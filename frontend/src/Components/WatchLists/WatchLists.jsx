import React from 'react'
import './WatchLists.css'
import { watchList } from '../../assets/assets'
import { Link } from 'react-router-dom'
function WatchLists() {
    /*console.log({watchList})*/
  return (
    <div className='watch-product'>
    <div className='watch-start-text'>
    <h2>smart watches</h2>
    <Link to="" className='gotoshop'>go to shop</Link>
    </div>

    <div className='watch-product-data'>
        {
            watchList.map((watch=>{
                return(
                    <div className='watch-col' key={watch.wid}>
                        <img src={watch.wimage} alt=".." className='watch-image'/>
                        <div className='watch-text'>
                            <p className='watch-model'>{watch.watch}</p>
                            <p className='watch-price'>{watch.price}</p>
                        </div>
                    </div>
                )
            }))
        }
    </div>
</div>
    )
}


export default WatchLists

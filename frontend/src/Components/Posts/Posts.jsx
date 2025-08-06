import React from 'react'
import {postsList} from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Posts.css'


function Posts() {
  return (
    <div className='posts'>
        <div className='posts-text'>
            <h2>latest posts</h2>
            <Link to="" className='gotoshop'>read blog</Link>
        </div>
        <div className='post-data'>
            {
                postsList.map((posts)=>{
                    return(
                        <div className='posts-cols'>
                            <div className='posts-card'>
                                <div className='posts-image'>
                                   <img src={posts.pimage} alt="..."/>    
                                </div>   
                                <div className='posts-text'>
                                   <p className='post-date'>{posts.pdate}</p>
                                   <p className='post-title'>{posts.ptitle}</p>
                                </div>                     
                            </div>
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Posts

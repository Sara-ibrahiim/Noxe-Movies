import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import styles from './TvShow.module.css'

export default function TvShow() {
  const [tv, setTv] = useState([])
  let mediaType='tv'
  let nums = new Array(10).fill(1).map((elem,index)=> index+1)



async function getTrending(page) {
  let {data}= await axios.get(` https://api.themoviedb.org/3/discover/tv?api_key=b4cd6a8adc685ed6ed46e6b1170659eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
  setTv(data.results)
  console.log(data.results)
}
useEffect(()=>{

getTrending(1)



},[])
  return<>
     <div className="row">
      {tv.map((item,index)=> <div key={index} className="col-md-3">
    <Link className='text-white text-decoration-none' to={`/moviesDetails/${item.id}/${mediaType}`}>
   
    <div className='position-relative'>
     <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} alt="" className='w-100'/>
        <h3 className='h6 text-center mt-1'>{item.name}</h3>
     <div className='vote top-0 end-0 position-absolute p-1'>{item.vote_average.toFixed(1)}</div>

    </div> 
    </Link> 
  </div>)}
     </div>

     <nav className='py-5'>
      <ul className='d-flex pagination pagination-sm justify-content-center'>
        {nums.map((page)=> <li key={page} onClick={()=>getTrending(page)} className='page-item p-1'>
          <Link className='page-link bg-transparent text-white'>{page}</Link>
        </li>)}
       
      </ul>

     </nav>
    </>
  
}

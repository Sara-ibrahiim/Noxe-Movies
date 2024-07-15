import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem'
import React, { useEffect, useState } from 'react'
import styles from './Movies.module.css'
import { Link } from 'react-router-dom'

export default function Movies() {

  
  const [movies, setMovies] = useState([])
  let mediaType='movie'
  let nums = new Array(10).fill(1).map((elem,index)=> index+1)



async function getTrending(page) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b4cd6a8adc685ed6ed46e6b1170659eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
  setMovies(data.results)
  console.log(data.results)
}
useEffect(()=>{

getTrending(1)



},[])
  return<>
     <div className="row">
      {movies.map((item,index)=> <div key={index} className="col-md-3">
    <Link className='text-white text-decoration-none' to={`/moviesDetails/${item.id}/${mediaType}`}>
   
    <div className='position-relative'>
     <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} alt="" className='w-100'/>
        <h3 className='h6 text-center mt-1'>{item.title}</h3>
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

import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

export default function People() {
  const [people, setPeople] = useState([])
  let mediaType='person'
  let nums = new Array(10).fill(1).map((elem,index)=> index+1)



async function getTrending(page) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=b4cd6a8adc685ed6ed46e6b1170659eb&language=en-US&page=${page}`)
  setPeople(data.results)
  console.log(data.results)
}
useEffect(()=>{

getTrending(1)



},[])
  return<>
     <div className="row">
      {people.map((item,index)=> <div key={index} className="col-md-3">
    <Link className='text-white text-decoration-none' to={`/moviesDetails/${item.id}/${mediaType}`}>
   
    <div className='position-relative'>
     <img src={'https://image.tmdb.org/t/p/w500'+item.profile_path} alt="" className='w-100'/>
        <h3 className='h6 text-center mt-1'>{item.name}</h3>
   

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

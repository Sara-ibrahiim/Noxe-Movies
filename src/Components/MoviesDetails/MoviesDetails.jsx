import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MoviesDetails() {
let {id,mediaType} = useParams();
const [details, setDetails] = useState([])



async function getTrending(id,mediaType) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=b4cd6a8adc685ed6ed46e6b1170659eb&language=en-US`)
  setDetails(data)
  console.log(data)
}
useEffect(()=>{

getTrending(id,mediaType)


},[])

  return <>
  <div className="row">
    <div className="col-md-3">
    {details.poster_path?<img src={'https://image.tmdb.org/t/p/w500'+details.poster_path} alt="" className='w-100'/>:<img src={'https://image.tmdb.org/t/p/w500'+details.profile_path} alt="" className='w-100'/>}
    </div>
    <div className="col-md-6 d-flex align-content-center">
        <div>
        <h2 className=''>{details.title} {details.name}</h2>
        <p className='muted my-3'>{details.overview}{details.biography}</p>
        {details.vote_average?<h5>Vote Average: {details.vote_average.toFixed(1)}</h5>:""}
        {details.vote_count?<h5>Vote Count: {details.vote_count}</h5>:""}
        </div>
    
    </div>
  </div>
  
  
  
  </>
}

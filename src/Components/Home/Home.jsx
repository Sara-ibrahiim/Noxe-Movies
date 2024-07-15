import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem'



export default function Home() {

  const [movies, setMovies] = useState([])
  const [tv, setTv] = useState([])
  const [people, setPeople] = useState([])



async function getTrending(mediaItem, callback) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaItem}/week?api_key=b4cd6a8adc685ed6ed46e6b1170659eb`)
  callback(data.results)
  console.log(data.results)
}
useEffect(()=>{

getTrending('movie',setMovies)
getTrending('tv', setTv)
getTrending('person', setPeople)


},[])
  return<>
  {movies[0]? <>
  
  
  
    <div className='row py-3'>
        <div className='col-md-4 d-flex align-items-center'>
          <div>
            <div className="brdr w-25 mb-3"> </div>
              <h2 className='h3'>Trending
                <br/>Movies
                <br/>To Watch Now

              </h2>
              <p className='muted'>
                Most Watched Movies By Week

              </p>
              <div className='brdr w-100 mt-3'> </div>
             
           
          </div>

        </div>
        {movies.slice(0,10).map((item,index)=><MediaItem key={index} item={item}/> )}
      </div>
      <div className='row py-3'>
        <div className='col-md-4 d-flex align-items-center'>
          <div>
            <div className="brdr w-25 mb-3"> </div>
              <h2 className='h3'>Trending
                <br/>Tv
                <br/>To Watch Now

              </h2>
              <p className='muted'>
                Most Watched tv By Week

              </p>
              <div className='brdr w-100 mt-3'> </div>
             
           
          </div>

        </div>
        {tv.slice(0,10).map((item,index)=><MediaItem key={index} item={item}/> )}
      </div>
      <div className='row py-3'>
        <div className='col-md-4 d-flex align-items-center'>
          <div>
            <div className="brdr w-25 mb-3"> </div>
              <h2 className='h3'>Trending
                <br/>People
                <br/>To Watch Now

              </h2>
              <p className='muted'>
                Most Watched people By Week

              </p>
              <div className='brdr w-100 mt-3'> </div>
             
           
          </div>

        </div>
        {people.slice(0,10).map((item,index)=><MediaItem key={index} item={item}/> )}
      </div>
  
  
  </> :<div className='d-flex vh-100 align-items-center justify-content-center'>
    <i className='fas fa-spinner fa-7x'></i>
    </div>}

    </>
  
}

import React, { useEffect } from 'react'
import  "./css/row.css"
import { useState } from 'react'
import axios from "./localaxios"

function Row({title,isLargeRow,fetchURL}) {
    const [movies,setMovie]=useState([])
    const base_url="https://image.tmdb.org/t/p/original/";


useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(fetchURL)
        setMovie(request.data.results);
        return request
      }
      fetchData();
},[fetchURL])
  return (
    <div className='row'>
     <h2>
          {title}
     </h2>
     <div className="row__posters">
        {movies.map(movie=>{
            return <img className={`rowposter ${isLargeRow && "largeImage"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} key={movie.id}/>
            })}
        
        
         
        


     </div>
    </div>
  )
}

export default Row
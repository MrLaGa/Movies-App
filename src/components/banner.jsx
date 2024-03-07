import React, { useEffect, useState } from 'react'
import axios from "axios"

function Banner(){
   const [movieObj, setmovieObj] = useState({});

   useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce')
    .then(function(response){
        let movies = response.data.results;
        let randommovie = movies[Math.floor(Math.random()*20)]
        setmovieObj(randommovie);
    })
    },[])
    if(movieObj.backdrop_path === undefined){
        return<>...Loading</>
      }
    
      
    return(
        <div className="flex justify-center	items-end h-[70vh] bg-cover bg-repeat	"
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}>
            <div className=" text-slate-300	 text-lg bg-gray-800/50	w-full text-center p-2"	>{movieObj.title}</div>
        </div>
    )
}

export default Banner
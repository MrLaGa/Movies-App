import axios from "axios"
import Moviecard from "./moviecard"
import React, { useEffect, useState } from 'react'

function Trendingmovies(){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce')
        .then(function(response){
            setMovies(response.data.results);
        }
        )
    },[])

    if(movies.length === 0){
        return<>...Loading</>
      }
    return(
        <>
        <div className="text-center font-bold text-2xl	 mt-9 ">Trending Movies</div>
        <div className="flex flex-wrap	p-4 gap-6 justify-around ">
        {
            movies.map((movieObj)=>{
                return <Moviecard
                        key={movieObj.id}
                        movieobj={movieObj}
                        title = {movieObj.title}
                        posterpath = {movieObj.poster_path}
                      />
            })
        }
        
        </div>
        
        </>
        
        
    )
}

export default Trendingmovies
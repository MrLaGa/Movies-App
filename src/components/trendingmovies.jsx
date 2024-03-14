import axios from "axios"
import Moviecard from "./Moviecard"
import React, { useEffect, useState } from 'react'
import Pagination from './pagination'
import { useContext } from "react"
import { movieContext } from './movieContext';


function Trendingmovies(){
    const{pageNo} = useContext(movieContext)

    const [movies, setMovies] = useState([]);


    useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce&page=${pageNo}`)
        .then(function(response){
            setMovies(response.data.results);
        }
        )
    },[pageNo])

    if(movies.length === 0){
        return<>...Loading</>
      }
    return(
        <>
        <div className="text-center font-bold text-2xl	 mt-7 ">Trending Movies</div>
        <div className="flex flex-wrap	p-4 gap-6 justify-around ">
        {
            movies.map((movieObj)=>{
                return <Moviecard
                        key={movieObj.id}
                        movieObj={movieObj}
                        title = {movieObj.title}
                        posterpath = {movieObj.poster_path}
                        
            
                      />
            })
        }
        
        </div>
        <Pagination/>
        
        </>
        
        
    )
}

export default Trendingmovies
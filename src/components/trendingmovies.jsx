import axios from "axios"
import Moviecard from "./moviecard"
import React, { useEffect, useState } from 'react'
import Pagination from './pagination'

function Trendingmovies(){

    const [movies, setMovies] = useState([]);
    const[pageNo, setpageNo] = useState(1);
    const[watchlist, setwatchlist] = useState([]);

    function handleaddWL(id){
        const newwatchlist = [...watchlist]
         newwatchlist.push(id)
         localStorage.setItem('watchlist',JSON.stringify(newwatchlist))
         setwatchlist(newwatchlist)
    }
    function handleremoveWL(id){
      const newwatchlist = watchlist.filter((movieid)=>{
        return id!==movieid;
      })
      localStorage.setItem('watchlist',JSON.stringify(newwatchlist))
      setwatchlist(newwatchlist);
    }

    function Handleprev(){
       if(pageNo>1){
           setpageNo(pageNo-1);
       }
    }
    function Handlenext(){
       setpageNo(pageNo+1);
    }

    useEffect(()=>{
        let watchlistFromLS = JSON.parse(localStorage.getItem('watchlist'))
        setwatchlist(watchlistFromLS);
    },[])

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
                        movieobj={movieObj}
                        title = {movieObj.title}
                        posterpath = {movieObj.poster_path}
                        watchlist={watchlist}
                        handleaddWL = {handleaddWL}
                        handleremoveWL = {handleremoveWL}
                        id = {movieObj.id}
                      />
            })
        }
        
        </div>
        <Pagination Handlenext={Handlenext}
                    Handleprev={Handleprev}
                    pageNo = {pageNo}
        />
        
        </>
        
        
    )
}

export default Trendingmovies
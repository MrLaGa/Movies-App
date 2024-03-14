
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watchlist from './components/Watchlist';
import Navbar from './components/navbar';
import { useState,useEffect } from 'react';
import { movieContext } from './components/movieContext';

function App() {
  const[WatchList, setwatchlist] = useState([]);
  const[pageNo, setpageNo] = useState(1);
    

    function Handleprev(){
       if(pageNo>1){
           setpageNo(pageNo-1);
       }
    }
    function Handlenext(){
       setpageNo(pageNo+1);
    }


    function handleaddWL(MovieObj){
        // const newwatchlist = [...watchlist]
        //  newwatchlist.push(MovieObj)
        const newwatchlist = [...WatchList, MovieObj];
         localStorage.setItem('WatchList',JSON.stringify(newwatchlist))
         setwatchlist(newwatchlist)
    }
    function handleremoveWL(MovieObj){
      const newwatchlist = WatchList.filter((movies)=>{
        return movies.id!==MovieObj.id;
      })
      localStorage.setItem('WatchList',JSON.stringify(newwatchlist))
      setwatchlist(newwatchlist);
    }
    useEffect(()=>{
      let watchlistFromLS = JSON.parse(localStorage.getItem('WatchList'))
      if(watchlistFromLS===null){
        return
      }
      setwatchlist(watchlistFromLS);
  },[]) 
 

  return (
    <BrowserRouter>
    <movieContext.Provider value={{WatchList, handleaddWL, handleremoveWL, setwatchlist,pageNo, Handlenext, Handleprev}}>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/WatchList' element={ <Watchlist/>}></Route>
    </Routes>
    </movieContext.Provider>
    </BrowserRouter>
    // <Home></Home>
  );
}

export default App;

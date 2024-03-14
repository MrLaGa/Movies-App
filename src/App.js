
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watchlist from './components/Watchlist';
import Navbar from './components/navbar';
import { useState,useEffect } from 'react';

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
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home
                                WatchList={WatchList}
                                handleaddWL={handleaddWL}
                                handleremoveWL={handleremoveWL}
                                setwatchlist={setwatchlist}
                                pageNo={pageNo}
                                Handlenext={Handlenext}
                                Handleprev={Handleprev}

      />}></Route>
      <Route path='/WatchList' element={ <Watchlist
                               WatchList={WatchList}
                               handleremoveWL={handleremoveWL}
                               setwatchlist={setwatchlist}
      />}></Route>
    </Routes>
    </BrowserRouter>
    // <Home></Home>
  );
}

export default App;

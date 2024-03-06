
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchList from './components/Watchlist';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/WatchList' element={ <><WatchList></WatchList></>}></Route>
    </Routes>
    </BrowserRouter>
    // <Home></Home>
  );
}

export default App;

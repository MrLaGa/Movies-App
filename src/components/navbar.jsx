
import movieimage from './filmicon.png';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='flex py-2'>
        <img className='size-10 mx-4' src={movieimage} alt="Film logo"/>
        <Link to="/"  className='text-3xl font-bold text-sky-600 mx-2'>Movies</Link>
        <Link to="/WatchList"  className='text-3xl font-bold text-sky-600 mx-2'>WatchList</Link>
        </div>
    )
}

export default Navbar
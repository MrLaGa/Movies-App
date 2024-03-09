
import movieicon from './movieicon.png';
import movieicon1 from './movieicon1.webp';

import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='flex py-2 border-2'>
        <img className='size-10 ml-5 mr-3' src={movieicon1} alt="Film logo"/>
        <Link to="/"  className='text-3xl font-bold text-sky-600 mx-2'>Movies</Link>
        <Link to="/WatchList"  className='text-3xl font-bold text-sky-600 mx-2'>WatchList</Link>
        </div>
    )
}

export default Navbar
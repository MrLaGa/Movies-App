import Navbar from "./navbar"
import Banner from "./banner"
import Trendingmovies from "./trendingmovies"
import Pagination from "./pagination"
 
function Home({
           WatchList, 
           handleaddWL,
           handleremoveWL,
           setwatchlist,
}){
    return(
        <>
        
        {/* <Navbar></Navbar> */}
        <Banner></Banner>
        <Trendingmovies WatchList ={WatchList}
                        handleaddWL={handleaddWL}
                        handleremoveWL={handleremoveWL}
                        setwatchlist={setwatchlist}
        />
        {/* <Pagination></Pagination> */}
        </>
    
    )
}

export default Home
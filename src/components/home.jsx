import Navbar from "./navbar"
import Banner from "./banner"
import Trendingmovies from "./trendingmovies"
import Pagination from "./pagination"
 
function Home({
           WatchList, 
           handleaddWL,
           handleremoveWL,
           setwatchlist,
           pageNo,
           Handlenext,
           Handleprev,
}){
    return(
        <>
        
        {/* <Navbar></Navbar> */}
        <Banner></Banner>
        <Trendingmovies WatchList ={WatchList}
                        handleaddWL={handleaddWL}
                        handleremoveWL={handleremoveWL}
                        setwatchlist={setwatchlist}
                        pageNo={pageNo}
                        Handlenext={Handlenext}
                        Handleprev={Handleprev}
        />
        {/* <Pagination></Pagination> */}
        </>
    
    )
}

export default Home
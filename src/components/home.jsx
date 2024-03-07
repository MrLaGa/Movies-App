import Navbar from "./navbar"
import Banner from "./banner"
import Trendingmovies from "./trendingmovies"
import Pagination from "./pagination"
 
function Home(){
    return(
        <>
        
        {/* <Navbar></Navbar> */}
        <Banner></Banner>
        <Trendingmovies></Trendingmovies>
        {/* <Pagination></Pagination> */}
        </>
    
    )
}

export default Home
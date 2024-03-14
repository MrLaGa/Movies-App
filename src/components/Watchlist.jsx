import { useState,useEffect } from "react";
import { useContext } from "react";
import { movieContext } from "./movieContext";
const genreName = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
}

export default function WatchList(){

  const{WatchList,handleremoveWL,setwatchlist} = useContext(movieContext)
 const [search,setsearch] = useState("");
  const [genreList,setGenreList] = useState(["All Genre"])
  

 useEffect(()=>{
    let temp = WatchList.map((movieObj)=>genreName[movieObj.genre_ids[0]])
    temp = new Set(temp);
    setGenreList(["All Genre",...temp])
},[WatchList])

 
   function Handleincrease(){
      const sorted = WatchList.sort((movieA,movieB)=>movieA.vote_average-movieB.vote_average);
      setwatchlist([...sorted])
   }
   function Handledecrease(){
    const sorted = WatchList.sort((movieA,movieB)=>movieB.vote_average-movieA.vote_average);
    setwatchlist([...sorted])
 }

   function handlesearch(e){
    setsearch(e.target.value)
   }
    return(
        <>
        <div className="flex mt-5 justify-center">
            {genreList.map((genre)=>{
                return(
                    <div 
                    className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center"
                    >{genre}</div>
                )
            })}
            
            
            
           
           
        </div>

        
        <div className="flex justify-center my-5">
            <input onChange={handlesearch} type="text" placeholder="Search Movies"
            className="h-[2.5rem] w-[16rem] bg-gray-100 border-2 border-gray-300 outline-none px-4 text-lg"
            />
        </div>

        <div className="m-7 overflow-hidden rounded-lg border shadow-md">
            <table className="p-4 w-full text-center">
                <thead className=" bg-gray-100 h-[2rem]">
                    <tr>
                        <th>Name</th>
                        <th >
                            <span onClick={Handleincrease}><i className="fa-solid fa-arrow-up"></i></span>
                            <span className="mx-2">Ratings</span>
                            <span onClick={Handledecrease}><i className="fa-solid fa-arrow-down"></i></span>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th>Delete Movies</th>
                    </tr>
                </thead>
                <tbody >
                        {WatchList.filter((movieobj)=>{
                           return movieobj.title.toLowerCase().includes(search.toLocaleLowerCase());

                        }).map((movieObj) => {
                            return <tr className=" border-b-2">
                                <td className="flex items-center mx-4 py-4"> <img className=" rounded-[6rem]	h-[6rem] w-[6rem]"
                                    src={"https://image.tmdb.org/t/p/original/"+ movieObj.poster_path} alt="poster" />
                                    <div className="mx-4">{movieObj.title}</div>
                                </td>
                                <td >{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>{genreName[movieObj.genre_ids[0]]}</td>
                                <td onClick={()=>handleremoveWL(movieObj)} className=" text-red-400 "><i className="fa-solid fa-trash-can cursor-pointer"></i></td>
                            </tr>
                        })}

                    </tbody>
            </table>
        </div>
        </>
    )
}
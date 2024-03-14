
import { useState } from "react"
import { useContext } from "react"
import { movieContext } from "./movieContext"

function Pagination(){

     const {Handlenext,Handleprev,pageNo} = useContext(movieContext);
     
    return(
        <div className="flex bg-gray-300 p-3 justify-center	gap-14 font-bold m-4">
            <div className="cursor-pointer"
            onClick={Handleprev}
            ><i className="fa-solid fa-arrow-left"></i></div>
            <div>{pageNo}</div>
            <div className="cursor-pointer"
            onClick={Handlenext}
            ><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination
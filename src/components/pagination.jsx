
import { useState } from "react"

function Pagination(props){

     
     
    return(
        <div className="flex bg-gray-300 p-3 justify-center	gap-14 font-bold m-4">
            <div className="cursor-pointer"
            onClick={props.Handleprev}
            ><i className="fa-solid fa-arrow-left"></i></div>
            <div>{props.pageNo}</div>
            <div className="cursor-pointer"
            onClick={props.Handlenext}
            ><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination
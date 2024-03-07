
import { useState } from "react"

function Pagination(){

     const[pageNo, setpageNo] = useState(1);

     function Handleprev(){
        if(pageNo>1){
            setpageNo(pageNo-1);
        }
     }
     function Handlenext(){
        setpageNo(pageNo+1);
     }
     
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
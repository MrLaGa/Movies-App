

function moviecard(props){
    return(
    <div className=" h-[20rem]	w-[200px] rounded-2xl overflow-hidden flex justify-center	items-end bg-cover"
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${props.posterpath})`}}>
        <div className=" text-slate-300	 text-lg bg-gray-800/50	w-full text-center p-2"	>{props.title}</div>
    </div> 
    )
}

export default moviecard
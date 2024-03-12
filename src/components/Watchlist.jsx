export default function WatchList(
    {WatchList,
    handleremoveWL,}
){
    // let movies = [
    //     {
    //         adult: false,
    //         backdrop_path: "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
    //         id: 619930,
    //         title: "Narvik",
    //         original_language: "no",
    //         original_title: "Kampen om Narvik",
    //         overview:
    //             "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
    //         poster_path: "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
    //         media_type: "movie",
    //         genre_ids: [10752, 18, 36, 28],
    //         popularity: 321.063,
    //         release_date: "2022-12-25",
    //         video: true,
    //         vote_average: 7.406,
    //         vote_count: 53,
    //     },
    //     {
    //         adult: false,
    //         backdrop_path: "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
    //         id: 804095,
    //         title: "The Fabelmans",
    //         original_language: "en",
    //         original_title: "The Fabelmans",
    //         overview:
    //             "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
    //         poster_path: "/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
    //         media_type: "movie",
    //         genre_ids: [18],
    //         popularity: 163.3,
    //         release_date: "2022-11-11",
    //         video: false,
    //         vote_average: 8.02,
    //         vote_count: 561,
    //     },
    //     {
    //         adult: false,
    //         backdrop_path: "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
    //         id: 1035806,
    //         title: "Detective Knight: Independence",
    //         original_language: "en",
    //         original_title: "Detective Knight: Independence",
    //         overview:
    //             "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
    //         poster_path: "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
    //         media_type: "movie",
    //         genre_ids: [28, 53, 80],
    //         popularity: 119.407,
    //         release_date: "2023-01-20",
    //         video: false,
    //         vote_average: 6.6,
    //         vote_count: 10,
    //     },
    //     {
    //         adult: false,
    //         backdrop_path: "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
    //         id: 555604,
    //         title: "Guillermo del Toro's Pinocchio",
    //         original_language: "en",
    //         original_title: "Guillermo del Toro's Pinocchio",
    //         overview:
    //             "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
    //         poster_path: "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
    //         media_type: "movie",
    //         genre_ids: [16, 14, 18],
    //         popularity: 754.642,
    //         release_date: "2022-11-18",
    //         video: false,
    //         vote_average: 8.354,
    //         vote_count: 1694,
    //     },
    // ];
    return(
        <>
        <div className="flex mt-5 justify-center">
            <div className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center"
            >All Generes</div>
            <div className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center"
            >All Generes</div>
            <div className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center"
            >All Generes</div>
            <div className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center"
            >All Generes</div>
            <div className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center"
            >All Generes</div>
            <div className="m-4 h-[2.5rem] w-[8rem] bg-blue-400 text-white rounded-xl flex justify-center items-center"
            >All Generes</div>
            
            
           
           
        </div>

        
        <div className="flex justify-center my-5">
            <input type="text" placeholder="Search Movies"
            className="h-[2.5rem] w-[16rem] bg-gray-100 border-2 border-gray-300 outline-none px-4 text-lg"
            />
        </div>

        <div className="m-7 overflow-hidden rounded-lg border shadow-md">
            <table className="p-4 w-full text-center">
                <thead className=" bg-gray-100 h-[2rem]">
                    <tr>
                        <th>Name</th>
                        <th >
                            <span><i className="fa-solid fa-arrow-up"></i></span>
                            <span className="mx-2">Ratings</span>
                            <span><i className="fa-solid fa-arrow-down"></i></span>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th>Delete Movies</th>
                    </tr>
                </thead>
                <tbody >
                        {WatchList.map((movieObj) => {
                            return <tr className=" border-b-2">
                                <td className="flex items-center mx-4 py-4"> <img className=" rounded-[6rem]	h-[6rem] w-[6rem]"
                                    src={"https://image.tmdb.org/t/p/original/"+ movieObj.poster_path} alt="poster" />
                                    <div className="mx-4">{movieObj.title}</div>
                                </td>
                                <td >{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>Action</td>
                                <td className=" text-red-400 "><i className="fa-solid fa-trash-can cursor-pointer"></i></td>
                            </tr>
                        })}

                    </tbody>
            </table>
        </div>
        </>
    )
}
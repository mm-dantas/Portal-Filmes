import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function MovieDetailPage(){

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => { 
                setMovie(data)
                console.log(data)
            })
            .catch(err => console.error(err));
    }, []);

    return(
        <>
       <div 
    key={movie.id} 
    className='h-[100vh] bg-cover bg-center text-white relative flex items-center justify-center'
    style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    }}
>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 p-4 flex flex-col items-center justify-center">
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 drop-shadow-lg mb-4">
        {movie.title}
    </h1>
    <p className="text-xl font-semibold">{movie.vote_average}</p>
    <p className="text-xl font-semibold max-w-xl">{movie.overview}</p>
</div>
</div>  
        
        
        </>
    )
}
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
            className="h-[500px]" 
            style={{
            backgroundImage: `url('https://api.themoviedb.org/t/p/w1280/${movie.backdrop_path}')`
        }}>
            <h1>{movie.title}</h1>
            <p>{movie.vote_average}</p>
        </div>
        
        
        </>
    )
}
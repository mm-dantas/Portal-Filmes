import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster_path, backdrop_path}) {
    
    const handleFavorite = (movie) => {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []

        const isFavorito = favoritos.some( filme => filme.id === movie.id )

        if(isFavorito){
            favoritos = favoritos.filter( filme => filme.id != movie.id)
        }else{
            favoritos.push(movie)
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }
    
    return (
        <div className="flex flex-col text-center">
            {/* <h2>{title}</h2> */}
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} />
            <Link to={`/movies/${id}`}>Saber mais</Link>
            <button 
            onClick={() => handleFavorite({id, title, poster_path})}>
                Adicionar Favoritos</button>
        </div>
    )
}
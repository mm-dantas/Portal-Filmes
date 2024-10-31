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
        <div key={id} className="flex flex-col text-center justify-center items-center flex-shrink-0 relative">
            {/* <h2>{title}</h2> */}
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} className="w-[130px] h-[200px] mt-3"/>
            <button 
            onClick={() => handleFavorite({id, title, poster_path})}>
                Adicionar Favoritos</button>
            <Link className="py-2 px-3 transition ease-in-out duration-300 bg-purple-800 hover:bg-white hover:text-purple-800 m-4 text-white rounded-3xl" to={`/movies/${id}`}>Saber mais</Link>
        </div>
    )
}
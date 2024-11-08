import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useState, useEffect } from "react";


export default function MovieCard({ id, title, poster_path, genre_ids, backdrop_path, isFavorite }) {
    const [isFavorito, setFavorito] = useState(false);

    // Carregar o estado de favorito ao montar o componente
    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const isFavorito = favoritos.some(filme => filme.id === id);
        setFavorito(isFavorito); 
    }, [id]);
    
    //parte de favoritos
    const handleFavorite = (movie) => {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []

        const isFavorito = favoritos.some(filme => filme.id === movie.id)

        if (isFavorito) {
            favoritos = favoritos.filter(filme => filme.id != movie.id)
        } else {
            favoritos.push(movie)
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos))
        setFavorito(!isFavorito)
    }
    //fim parte de favoritos

    return (
        <div key={id} className="flex flex-col text-center justify-center items-center flex-shrink-0 relative">
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} className="rounded-t-lg w-[130px] h-[200px]" />
            <div className="p-2 rounded-b-lg bg-gray-500 w-full grid grid-cols-2 gap-4 items-center justify-items-center">                
                    <button className="transition ease-in-out duration-300 transform hover:scale-125"
                        onClick={() => handleFavorite({ id, title, poster_path, genre_ids })}>
                        {isFavorito ?
                            <MdFavorite className="text-red-500 transition-transform duration-300 ease-in-out transform scale-125" /> :
                            <MdFavoriteBorder className="text-light transition-transform duration-300 ease-in-out transform scale-125" />}
                    </button>
                
                    <Link className="transform transition-transform duration-300 hover:scale-125" to={`/movies/${id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </Link>
                
            </div>
        </div>
    )
}
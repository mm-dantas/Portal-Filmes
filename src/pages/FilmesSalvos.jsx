import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function FilmesSalvos() {
    const [watchLaterMovies, setWatchLaterMovies] = useState([]);

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('AssistirDepois')) || [];
        setWatchLaterMovies(savedMovies);
    }, []);

    return (
        <div className="flex flex-col mt-12 justify-center items-center">
            <h1 className="text-3xl font-bold mb-5">Filmes para Ver Depois</h1>
            {watchLaterMovies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {watchLaterMovies
                        .map(movie => (
                            <MovieCard
                                key={movie.id} {...movie} isFavorite={true}/>
                        )
                        )
                    }
                </div>
            ) : (
                <p>Você ainda não salvou nenhum filme para ver depois.</p>
            )}
        </div>
    );
}

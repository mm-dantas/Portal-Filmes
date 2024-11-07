import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";

export default function FilmesSalvos() {
    const { listaescolhida } = useParams();
    const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
        if (listaescolhida == "verdepois"){
            const assistirMaisTarde = JSON.parse(localStorage.getItem('AssistirDepois')) || [];
            setSavedMovies(assistirMaisTarde);
        } else if (listaescolhida == "assistidos") {
            const assistido = JSON.parse(localStorage.getItem('JaAssistidos')) || [];
            setSavedMovies(assistido);
        }
    }, [listaescolhida]);

    return (
        <div className="flex flex-col mt-12 justify-center items-center">
            <h1 className="text-3xl font-bold mb-5">Filmes para Ver Depois</h1>
            {savedMovies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {savedMovies
                        .map(movie => (
                            <MovieCard
                                key={movie.id} {...movie}/>
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

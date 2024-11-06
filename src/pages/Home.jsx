import { useEffect, useState } from "react";
import ContainerCards from "../components/ContainerCards";
import ContainerRecomendados from "../components/ContainerRecomendados";
import MovieCard from "../components/MovieCard";

export default function Home() {
    
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [filmesEstaoPorVir, setFilmesEstaoPorVir] = useState([]);
    const [filmesTendencia, setFilmesTendencia] = useState([]);


    const chave_api = '?api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const inicio_url = 'https://api.themoviedb.org/3';

    const fetchMovies = async () => {
        try {
            const popularidadeURL = `${inicio_url}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br&page=1`;
            const estaoPorVirURL = `${inicio_url}/movie/upcoming${chave_api}&language=pt-br&page=1`;
            const tendenciasURL = `${inicio_url}/trending/all/week${chave_api}&language=pt-br&page=1`;

            const [popularResponse, estaoPorVirResponse, tendenciasResponse] = await Promise.all([
                fetch(popularidadeURL),
                fetch(estaoPorVirURL),
                fetch(tendenciasURL)
            ]);

            const popularData = await popularResponse.json();
            const estaoPorVirData = await estaoPorVirResponse.json();
            const tendenciasData = await tendenciasResponse.json();

            setFilmesPopulares(popularData.results);
            setFilmesEstaoPorVir(estaoPorVirData.results);
            setFilmesTendencia(tendenciasData.results);
        }
        catch (error) {
            console.error('Erro ao buscar os filmes:', error);
        }

    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
        <div className="bg-gray-900 text-white min-h-screen px-4 py-6">
            <ContainerRecomendados titulo="Recomendados">

            </ContainerRecomendados>

            {/* <CardContainer titulo="Filmes antigos">
                {
                    movies
                        .filter(filme => (filme.ano_lancamento < 2000))
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </CardContainer> */}

            <ContainerCards titulo="Filmes Populares">
                {
                    filmesPopulares
                        .map(movie => (
                            <MovieCard
                                key={movie.id} {...movie} isFavorite={true}/>
                        )
                        )
                }
            </ContainerCards>

            <ContainerCards titulo="Chegando Nos Cinemas">
                {
                    filmesEstaoPorVir
                        .map(movie => (
                            <MovieCard
                                key={movie.id} {...movie} />
                        )
                        )
                }
            </ContainerCards>

            <ContainerCards titulo="Tendências">
                {
                    filmesTendencia
                        .map(movie => (
                            <MovieCard
                                key={movie.id} {...movie} />
                        )
                        )
                }
            </ContainerCards>
            </div>

        </>
    )
}
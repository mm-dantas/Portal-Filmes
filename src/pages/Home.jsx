import { useContext, useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import ContainerMovies from "../components/ContainerMovies";
import ContainerRecomendados from "../components/ContainerRecomendados";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";

export default function Home() {
    
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [filmesEstaoPorVir, setFilmesEstaoPorVir] = useState([]);
    const [seriesTV, setSeriesTV] = useState([]);


    const chave_api = '?api_key=7c572a9f5b3ba776080330d23bb76e1e';  
    const inicio_url = 'https://api.themoviedb.org/3';

    const fetchMovies = async () => {
        try{
            const popularidadeURL = `${inicio_url}/movie/popular${chave_api}&language=pt-br&page=1`;
            const estaoPorVirURL = `${inicio_url}/movie/upcoming${chave_api}&language=pt-br&page=1`;
            const seriesTvURL = `${inicio_url}/tv/popular${chave_api}&language=pt-br&page=1`;

            const [popularResponse, estaoPorVirResponse, seriesTvResponse] = await Promise.all([
                fetch(popularidadeURL),
                fetch(estaoPorVirURL),
                fetch(seriesTvURL)
              ]);

            const popularData = await popularResponse.json();
            const estaoPorVirData = await estaoPorVirResponse.json();
            const seriesTvURLData = await seriesTvResponse.json();
            
            setFilmesPopulares(popularData.results);
            setFilmesEstaoPorVir(estaoPorVirData.results);
            setSeriesTV(seriesTvURLData.results);
        }
        catch(error){
            console.error('Erro ao buscar os filmes:', error);
        }
        
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
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

            <ContainerMovies titulo="Filmes Populares">
            {
                filmesPopulares
                .map( movie => (
                    <MovieCard
                        key={movie.id} {...movie} />
                    )
                )
            }
            </ContainerMovies>

            <ContainerMovies titulo="Chegando Nos Cinemas">
            {
                filmesEstaoPorVir
                .map( movie => (
                    <MovieCard
                        key={movie.id} {...movie} />
                    )
                )
            }
            </ContainerMovies>

            <ContainerMovies titulo="Séries de TV">
            {
                seriesTV
                .map( movie => (
                    <MovieCard
                        key={movie.id} {...movie} />
                    )
                )
            }
            </ContainerMovies>


        </>
    )
}
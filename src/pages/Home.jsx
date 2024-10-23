import CardContainer from "../components/CardContainer";
import ContainerRecomendados from "../components/ContainerRecomendados";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";

export default function Home() {
    


    return (
        <>
            <ContainerRecomendados titulo="Recomendados">
                
            </ContainerRecomendados>

            <CardContainer titulo="Filmes antigos">
                {
                    movies
                        .filter(filme => (filme.ano_lancamento < 2000))
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </CardContainer>


        </>
    )
}
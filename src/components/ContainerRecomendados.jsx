
import { useEffect, useState } from 'react';
import RecomendadoCard from './RecomendadoCard';

export default function ContainerRecomendados({titulo}) {
    const [recomendados, setRecomendados] = useState([]);

    useEffect(() => {
        const filmesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const listaIds = filmesFavoritos.map(filme => filme.id); 

        getMovieRecommendations(listaIds);

        async function getMovieRecommendations(ids) {
            try {
                const promises = ids.map(id =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
                        .then(response => response.json())
                        .then(data => data.results)
                );

                const results = await Promise.all(promises); 
                const todosRecomendados = results.flat(); 
                setRecomendados(todosRecomendados);
            } catch (error) {
                console.error("Erro ao buscar recomendações:", error);
            }
        }

    }, []);


    return (
        <>
            <section className="px-12">
                <h2 className="text-3xl font-bold mb-5">{titulo}</h2>
            {
                recomendados.length >= 4 ?

                
                <RecomendadoCard recomendados={recomendados} />

                :
                <p> Filme não encontrado</p>

            }
            </section>
        </>
    )
}
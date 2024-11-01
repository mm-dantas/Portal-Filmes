
import { useEffect, useState } from 'react';
import RecomendadoCard from './RecomendadoCard';

export default function ContainerRecomendados({titulo}) {
    const [selected, setSelected] = useState(1);
    const [filmes, setFilmes] = useState([]);


    useEffect(() => {
        const radioButtons = ["article-01", "article-02", "article-03", "article-04"];

        const interval = setInterval(() => {
            // Alterna entre os botões de rádio
            setSelected((prevSelected) => {
                const next = (prevSelected % radioButtons.length) + 1;
                return next;
            });
        }, 3000); // Muda a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);


    useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => {
                setFilmes(data.results)
            })
            .catch(error => console.error(error));
        },
     []);
        
    const filmesFiltrados = filmes.filter(filme => filme.vote_average > 7)
    console.log(filmesFiltrados)


    return (
        <>
            <section className="px-12">
                <h2 className="text-3xl font-bold mb-5">{titulo}</h2>
            {
                filmesFiltrados.length >= 4 ?

                
                <RecomendadoCard filmesFiltrados={filmesFiltrados} />

                :
                <p> Filme não encontrado</p>

            }
            </section>
        </>
    )
}
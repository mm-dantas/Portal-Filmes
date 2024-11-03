import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function MoviesByGenrePage(){

    const {generoescolhido} = useParams();
    const [allGeneros, setAllGeneros] = useState([]);
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => setAllGeneros(data.genres))
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {
            const generoBuscado = allGeneros.find((genero) => genero.name === generoescolhido);
            if (generoBuscado) {
                fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&with_genres=${generoBuscado.id}`)
                    .then(response => response.json())
                    .then(data => setFilmes(data.results))
                    .catch(err => console.error(err));
            }
    }, [allGeneros]);


    return(
        <>
        <div className="bg-gray-900 text-white min-h-screen px-4 py-6">
        <h2 className='col-span-4 text-2xl font-bold text-center mb-5'> Os filmes do gênero {generoescolhido} encontrados são: </h2>
        <main className="grid grid-cols-5 gap-6 justify-items-center mb-10">
        {
            filmes.map((filme) => (
                <MovieCard key={filme.id} {...filme}/>
            ))
        }
        </main>
        </div>
        </>
    )
}
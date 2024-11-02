import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
                .then(response => response.json())
                .then(data => {
                    setFilmes(data.results)
                })
                .catch(error => console.error(error))
                .finally(() => setIsLoading(false));
        }, 2000)

    }, []);


    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))




    return (
        <>
                <h2 className="col-span-4 text-2xl font-bold text-center mb-5 mt-5">
                    Veja o catálogo completo de filmes.
                </h2>

                <form class="max-w-md mx-auto mb-10">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Pesquise um filme..."/>
                        
                    </div>
                </form>
                <section className="flex flex-wrap justify-between gap-4">
                    {
                        isLoading ? <p>Carregando</p>
                            :
                            filmesFiltrados.length > 0 ?

                                filmesFiltrados
                                    .map(filme => (
                                        <MovieCard key={filme.id} {...filme} />
                                    ))
                                :
                                <p> Filme não encontrado</p>



                    }
                </section>
        </>
    )
}


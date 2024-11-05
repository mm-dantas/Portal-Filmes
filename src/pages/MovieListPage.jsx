import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { CircularPagination } from "../components/CircularPagination";

export default function MovieListPage() {

    const [search, setSearch] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                setFilmes(data.results);
                setTotalPages(data.total_pages);
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    }, [currentPage]);

    const filmesFiltrados = filmes
        .filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 20);

    return (
        <div className="bg-gray-900 text-white min-h-screen px-4 py-6">
            <h2 className="text-center text-4xl font-bold mb-10">Veja o Catálogo Completo de Filmes</h2>

            <form className="max-w-md mx-auto mb-10">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-300 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        id="default-search" 
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={search}
                        onChange={handleSearch}
                        placeholder="Pesquise um filme..."
                    />
                </div>
            </form>

            <section className="grid grid-cols-5 gap-6 justify-items-center mb-10">
                {isLoading ? (
                    <p className="text-center text-xl">Carregando...</p>
                ) : filmesFiltrados.length > 0 ? (
                    filmesFiltrados.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                ) : (
                    <p className="col-span-5 text-center text-xl">Filme não encontrado</p>
                )}
            </section>
            
            <div className='flex justify-center'>
                <CircularPagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}

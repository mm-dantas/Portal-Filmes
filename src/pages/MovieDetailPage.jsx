import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [trailer, setTrailer] = useState(null);
    const [watchLater, setWatchLater] = useState(false);

    //elenco
    const [elenco, setElenco] = useState([]);

    const fetchMovies = async () => {
        try {
        const elencoURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e`;

        const [elencoResponse] = await Promise.all([
            fetch(elencoURL)
        ]);
    
        const elencoData = await elencoResponse.json();

        setElenco(elencoData.cast);
    }
    catch (error) {
        console.error('Erro ao buscar os filmes:', error);
    }

}

useEffect(() => {
    fetchMovies();
}, []);
    
    //fim elesnco

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => {
                setFilme(data);
                console.log(data);
            })
            .catch(err => console.error(err));
    }, [id]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) {
                    const trailerURL = data.results[0].key;
                    setTrailer(`https://www.youtube.com/watch?v=${trailerURL}`);
                }
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleWatchLater = (filme) => {
        let verDepois = JSON.parse(localStorage.getItem('AssistirDepois')) || [];

        const isWatchLater = verDepois.some(item => item.id === filme.id);

        if (isWatchLater) {
            verDepois = verDepois.filter(item => item.id !== filme.id);
        } else {
            verDepois.push(filme);
        }

        localStorage.setItem('AssistirDepois', JSON.stringify(verDepois));
        setWatchLater(!isWatchLater);
    };

    return (
        <>
            <div
                key={filme.id}
                className='mt-14 h-[75vh] bg-cover bg-center text-white relative flex items-center justify-center'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex gap-7 w-[100vw] px-20">
                    <img src={`https://image.tmdb.org/t/p/w780${filme.poster_path}`} alt={filme.title} className="rounded-lg relative z-10 h-[500px]" />
                    <div className="relative z-10 p-4 flex flex-col justify-between h-[500px]">
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 drop-shadow-lg mb-4">
                                    {filme.title}
                                </h1>
                                <p className="text-xl font-semibold">({filme.release_date})</p>
                            </div>
                            <div className="flex items-center">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow-lg">
                                <p className="flex items-center font-semibold">
                                    {filme.vote_average}
                                </p>
                            </div>
                            <p className="text-yellow-400">User Score⭐ </p>
                            </div>
                        </div>
                        <p className="text-xl font-semibold max-w-xl">{filme.overview}</p>
                        <button 
                            onClick={() => handleWatchLater({ id: filme.id, title: filme.title, poster_path: filme.poster_path })} 
                            className={`mt-4 w-16 h-16 rounded-full ${watchLater ? 'bg-red-600' : 'bg-green-600'} text-white flex items-center justify-center`}
                        >
                            {watchLater ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {trailer ? (
                    <iframe
                        width="560"
                        height="315"
                        src={trailer.replace("watch?v=", "embed/")}
                        title={`${filme.title} Trailer`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <p>Trailer não disponível</p>
                )}
            </div>

            
        </>
    );
}

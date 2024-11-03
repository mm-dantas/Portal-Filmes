import { useEffect, useState } from "react";
import CardGeneros from "../components/CardGeneros";

export default function GenreListPage() {
  const [generos, setGenero] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
      .then(response => response.json())
      .then(data => { setGenero(data.genres) })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-10">Explore Gêneros de Filmes</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {generos.map((genero) => (
          <CardGeneros key={genero.id} {...genero} />
        ))}
      </div>
    </div>
  );
}

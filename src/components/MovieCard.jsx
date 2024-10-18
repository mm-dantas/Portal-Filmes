import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster_path }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} />
            <Link to={`/movies/${id}`}>Saber mais</Link>
        </div>
    )

}
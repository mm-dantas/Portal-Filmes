import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


export default function ElencoCard({ id, name, profile_path, character }) {



    return (
        <div key={id} className="flex flex-col text-center justify-center items-center flex-shrink-0 relative w-[135px] h-[300px]">
            
            <img src={`https://image.tmdb.org/t/p/w342${profile_path}`} alt={name} className="rounded-t-lg h-[200px]" />
            <div className="p-2 rounded-b-lg bg-gray-500 w-full grid grid-cols-1 gap-2 items-center justify-items-center h-[85px]">
                <h5 className="text-sm break-words font-semibold">{name}</h5>
                <p className="text-xs break-words">{character}</p>

            </div>
        </div>

    )
}
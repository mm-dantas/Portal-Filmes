import { Link } from "react-router-dom";

export default function CardGeneros({ name }) {
    return (
        <Link className="w-auto" to={`/genre/${name}`}>
            <div className="relative w-64 h-28 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-full w-full absolute top-0 left-0"></div>
                <div className="flex items-center justify-center h-full relative z-10">
                    <h3 className="text-xl text-white font-bold text-shadow">{name}</h3>
                </div>
                <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
            </div>
        </Link>
    );
}

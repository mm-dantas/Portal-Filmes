import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Header() {

    const [isLogged, setIsLogged] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

    const handleLogin = () => {
        setIsLogged(!isLogged);
    };

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    return (
        <>
            <header className="bg-purple-800 flex text-white justify-around h-14 items-center">
                <div>
                    <h1 className="font-bold">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                        {isLogged && (
                            <li>
                                <button onClick={toggleSubmenu} className="relative">
                                    Salvos
                                </button>
                                {showSubmenu && (
                                    <ul className="absolute bg-purple-700 mt-2 p-2 rounded shadow-lg text-white">
                                        <li><NavLink to="/saved/verdepois">Ver depois</NavLink></li>
                                        <li><NavLink to="/saved/assistidos">Assistidos</NavLink></li>
                                    </ul>
                                )}
                            </li>
                        )}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin} />
            </header>
        </>
    );
}

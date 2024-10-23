import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecomendadoCard({ filmesFiltrados }) {

    const [selected, setSelected] = useState(1);

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

        return (
            <>
                <div className="max-w-lg mx-auto relative">

                    <input id="article-01" type="radio" name="slider" className="sr-only peer/01" checked={selected === 1} onChange={() => setSelected(1)} />
                    <input id="article-02" type="radio" name="slider" className="sr-only peer/02" checked={selected === 2} onChange={() => setSelected(2)} />
                    <input id="article-03" type="radio" name="slider" className="sr-only peer/03" checked={selected === 3} onChange={() => setSelected(3)} />
                    <input id="article-04" type="radio" name="slider" className="sr-only peer/04" checked={selected === 4} onChange={() => setSelected(4)} />

                    <div className="
absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
peer-focus-visible/01:[&_article]:ring
peer-focus-visible/01:[&_article]:ring-indigo-300
peer-checked/01:relative
peer-checked/01:z-50
peer-checked/01:translate-x-0
peer-checked/01:scale-100
peer-checked/01:[&>label]:pointer-events-none
peer-checked/02:-translate-x-20
peer-checked/02:scale-[83.75%]
peer-checked/02:z-40
peer-checked/03:-translate-x-40
peer-checked/03:z-30
peer-checked/04:-translate-x-40                    
peer-checked/04:opacity-0
peer-checked/05:-translate-x-40
">
                        <label className="absolute inset-0" htmlFor="article-01"></label>
                        <div className=" rounded-lg shadow-2xl" style={{ display: 'inline-block' }}>
                            <img src={`https://image.tmdb.org/t/p/w780/${filmesFiltrados[0].poster_path}`} className="h-[77vh] rounded-lg m-0" />
                        </div>
                    </div>

                    <div className="
absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
peer-focus-visible/02:[&_article]:ring
peer-focus-visible/02:[&_article]:ring-indigo-300                        
peer-checked/01:translate-x-20
peer-checked/01:scale-[83.75%]
peer-checked/01:z-40
peer-checked/02:relative
peer-checked/02:z-50
peer-checked/02:translate-x-0
peer-checked/02:scale-100
peer-checked/02:[&>label]:pointer-events-none
peer-checked/03:-translate-x-20
peer-checked/03:scale-[83.75%]
peer-checked/03:z-40
peer-checked/04:-translate-x-40
peer-checked/04:z-30
peer-checked/05:-translate-x-40 
peer-checked/05:opacity-0
">
                        <label className="absolute inset-0" htmlFor="article-02"><span className="sr-only">Focus on the big picture</span></label>
                        <div className=" rounded-lg shadow-2xl" style={{ display: 'inline-block' }}>
                            <img src={`https://image.tmdb.org/t/p/w780/${filmesFiltrados[1].poster_path}`} className="h-[77vh] rounded-lg m-0" />
                        </div>
                    </div>

                    <div className="
absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
peer-focus-visible/03:[&_article]:ring
peer-focus-visible/03:[&_article]:ring-indigo-300                          
peer-checked/01:translate-x-40
peer-checked/01:z-30
peer-checked/02:translate-x-20
peer-checked/02:scale-[83.75%]
peer-checked/02:z-40
peer-checked/03:relative
peer-checked/03:z-50
peer-checked/03:translate-x-0
peer-checked/03:scale-100
peer-checked/03:[&>label]:pointer-events-none
peer-checked/04:-translate-x-20
peer-checked/04:scale-[83.75%]
peer-checked/04:z-40
peer-checked/05:-translate-x-40
peer-checked/05:z-30                  
">
                        <label className="absolute inset-0" htmlFor="article-03"><span className="sr-only">Focus on the big picture</span></label>
                        <div className=" rounded-lg shadow-2xl" style={{ display: 'inline-block' }}>
                            <img src={`https://image.tmdb.org/t/p/w780/${filmesFiltrados[2].poster_path}`} className="h-[77vh] rounded-lg m-0" />
                        </div>

                    </div>

                    <div className="
absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
peer-focus-visible/04:[&_article]:ring
peer-focus-visible/04:[&_article]:ring-indigo-300                          
peer-checked/01:translate-x-40 
peer-checked/01:opacity-0
peer-checked/02:translate-x-40
peer-checked/02:z-30
peer-checked/03:translate-x-20
peer-checked/03:scale-[83.75%]
peer-checked/03:z-40
peer-checked/04:relative
peer-checked/04:z-50
peer-checked/04:translate-x-0
peer-checked/04:scale-100
peer-checked/04:[&>label]:pointer-events-none
peer-checked/05:-translate-x-20
peer-checked/05:scale-[83.75%]
peer-checked/05:z-40
">
                        <label className="absolute inset-0" htmlFor="article-04"><span className="sr-only">Focus on the big picture</span></label>
                        <div className=" rounded-lg shadow-2xl" style={{ display: 'inline-block' }}>
                            <img src={`https://image.tmdb.org/t/p/w780/${filmesFiltrados[4].poster_path}`} className="h-[77vh] rounded-lg m-0" />
                        </div>
                    </div>
                </div>
            </>
        )

    }
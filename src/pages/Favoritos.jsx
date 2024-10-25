import { useEffect, useState } from "react"

export default function Favoritos(){

    const [favoritos, setFavoritos] = useState([])

    useEffect(()=>{
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos'))
        setFavoritos(favoritosLocalStorage)
    }, [])

    return(
        <>
            {
                favoritos.map(filme => (
                <h1>{favoritos.title}</h1>
                ))
            }
        </>
    )
}
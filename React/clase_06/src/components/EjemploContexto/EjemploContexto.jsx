import React, { useContext } from 'react'
import { Contexto } from '../../context/MiContexto'

const EjemploContexto = () => {

    // console.log(useContext(Contexto))
    const { color, titulo } = useContext(Contexto)
    
    return (
        <div>
            <h2 style={{ color }}>{titulo}</h2>
        </div>
    )
}

export default EjemploContexto
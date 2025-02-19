import React, { useEffect, useState, useRef } from 'react'
import { ClickBtn } from '../EjemploUseState/EjemploUseState'

const Desafio = () => {

    const [count, setCount] = useState(0)

    let id = useRef(null) // guardamos referencia

    useEffect(() => {
        id.current = setInterval(() => { //asignamos id en el id.current para no perder la referencia
            setCount((prevState) => prevState + 1)
        }, 1000)
         return() => clearInterval(id.current) // limpieza del intervalo
    }, [])
    
    const handleStop = () => {
        // console.log('stop', id.current)
        clearInterval(id.current)
    }
    return (
        <>
            <span>{count}</span>
            <ClickBtn onClick={handleStop}>Stop</ClickBtn>
        </>
    )
}

export default Desafio
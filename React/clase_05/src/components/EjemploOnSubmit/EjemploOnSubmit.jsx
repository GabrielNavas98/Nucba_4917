import React from 'react'
import { ClickBtn } from '../EjemploUseState/EjemploUseState'

const EjemploOnSubmit = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Validando formulario....')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='ingresa algo...' />
            <ClickBtn>Enviar</ClickBtn>
        </form>
    )
}

export default EjemploOnSubmit
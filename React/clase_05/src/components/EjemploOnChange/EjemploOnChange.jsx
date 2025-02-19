import React, { useState } from 'react'
import styled from 'styled-components'

const InputForm = styled.input`
    height:2rem;
    width: 100%;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid #4747ff;
    color: white;
    margin-top: 2rem;
`

const EjemploOnChange = () => {
    const [name, setName] = useState('Homero Simpson')
    const handleChange = (event) => {
        const value = event.target.value
        setName(value)
    }
    return (
        <form>
            <span>Nombre: {name}</span>
            <InputForm
                placeholder='Igresa tu nombre'
                onChange={handleChange}
            />
        </form>
    )
}

export default EjemploOnChange
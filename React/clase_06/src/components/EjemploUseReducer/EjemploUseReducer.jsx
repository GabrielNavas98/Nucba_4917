import React, { useReducer } from 'react'
import styled from 'styled-components'

export const ReducerBtn = styled.button`
    padding: 1.5rem 4rem;
    background-color: #4747ff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`

const EjemploUseReducer = () => {

    const initialState = 'white'

    const reducer = (state, action) => {
        switch (action.type) {
            case 'rojo':
                return '#e63946'
            case 'azul':
                return 'blue'
            case 'verde': 
                return 'green'       
            default:
                state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h2 style={{ color: state }}>Soy un título</h2>
            <ReducerBtn onClick={() => dispatch({ type: 'rojo' })}>ROJO</ReducerBtn>
            <ReducerBtn onClick={() => dispatch({ type: 'azul' })}>AZUL</ReducerBtn>
            <ReducerBtn onClick={() => dispatch({ type: 'verde' })}>VERDE</ReducerBtn>
        </>
    )
}

export default EjemploUseReducer
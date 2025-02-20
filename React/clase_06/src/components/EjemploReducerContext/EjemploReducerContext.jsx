import React, { useContext, useState } from 'react'
import { Contexto } from '../../context/MiContexto'
import { ReducerBtn } from '../EjemploUseReducer/EjemploUseReducer'

const EjemploReducerContext = () => {

    const { state, dispatch} = useContext(Contexto)

    const [inputValue, setInputValue] = useState('')
    
    const handleChange = (e) =>  {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    return (
        <div>
            <h2>{state.data}</h2>
            {
                state.isError && <p>Ocurrio un error</p> 
            }
            {
                state.isLoading && <p>Cargando....</p>
            }
            <input type="text" onChange={handleChange} />
            <ReducerBtn onClick={() => dispatch({type: 'isError'})}>Trigger Error</ReducerBtn>
            <ReducerBtn onClick={() => dispatch({type: 'isLoading'})}>Trigger Loading</ReducerBtn>
            <ReducerBtn onClick={() => dispatch({ type: 'dataRecibida', payload: inputValue})}>Trigger Data</ReducerBtn>
        </div>
    )
}

export default EjemploReducerContext
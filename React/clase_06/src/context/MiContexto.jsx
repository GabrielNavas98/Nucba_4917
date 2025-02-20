import { createContext, useReducer } from "react";

export const Contexto = createContext()

export const ContextoProvider = ({ children }) => {

    const initialState = {
        data: '',
        isLoading: true,
        isError: false
    }

    const contextReducer = (state, action) => {
        switch (action.type) {
            case 'isError':
                return {
                    ...state,
                    data: '',
                    isLoading: false,
                    isError: true
                }
            case 'isLoading':
                return {
                    ...state,
                    data: '',
                    isLoading: true,
                    isError: false
                }
            case 'dataRecibida':
                return{
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload
                }        
            default:
                state;
        }
    }

    const [ state, dispatch ] = useReducer(contextReducer, initialState)


    return (
        <Contexto.Provider
            // value={{color: 'crimson', titulo:'Soy un titulo del contexto'}}
            value={{state, dispatch}}
        >
            { children }
        </Contexto.Provider>
    )
}
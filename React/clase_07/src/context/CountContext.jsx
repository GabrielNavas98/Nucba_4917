import { createContext, useContext, useReducer } from "react";
import { counterInitialState, countReducer } from "../reducer/countReducer";

export const CountContext = createContext()

export const useCountContext = () => useContext(CountContext)

export const CounteContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(countReducer, counterInitialState)
    
    const data = {state, dispatch}

    return(
        <CountContext.Provider value={data}>
            { children }
        </CountContext.Provider>
    )
}
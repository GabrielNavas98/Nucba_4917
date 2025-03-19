import { createContext, useContext, useReducer, useState } from "react";
import { countInitialState, countReducer } from "./countReducer";

const CountContext = createContext();
export const useCountContext = () => useContext(CountContext);

const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, countInitialState);

  const data = { state, dispatch };
  return (
    <CountContext.Provider value={data}> {children} </CountContext.Provider>
  );
};

export { CountContextProvider };

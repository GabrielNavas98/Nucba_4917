import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import Counter from './components/counter/Counter'
import { CounteContextProvider } from './context/CountContext'

const App = () => {
  return (
    <>
    <CounteContextProvider>
      <Counter/>    
    </CounteContextProvider>
    <GlobalStyle/>
    </>
  )
}

export default App
import React from 'react'
import GeneralWrapper from './components/GeneralWrapper/GeneralWrapper'
import EjemploUseReducer from './components/EjemploUseReducer/EjemploUseReducer'
import EjemploContexto from './components/EjemploContexto/EjemploContexto'
import EjemploReducerContext from './components/EjemploReducerContext/EjemploReducerContext'

const App = () => {
  return (
    <GeneralWrapper>
      {/* <EjemploUseReducer/> */}
      {/* <EjemploContexto/> */}
      <EjemploReducerContext/>
    </GeneralWrapper>
  )
}

export default App
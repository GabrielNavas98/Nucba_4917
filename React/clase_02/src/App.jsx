import { EjemploConJSX, EjemploSinJSX } from './components/EjemplosJSX'
import './App.css'
import { EjemploClase, EjemploFuncional } from './components/EjemplosTipoComponentes'
import { EjemplosProps } from './components/EjemplosProps'
import EjemplosCondicional from './components/EjemplosCondicional'
import EjemplosRenderDinamico from './components/EjemplosRenderDinamico'

function App() {

  return (
    <>
      <EjemploSinJSX />
      <EjemploConJSX />
      <EjemploClase />
      <EjemploFuncional />
      <EjemplosProps
        nombre='Francisco'
        apellido='Cepeda'
        edad={25}
        pais='Argentina'
      />
      <EjemplosCondicional/>
      <EjemplosRenderDinamico/>
    </>
  )
}

export default App

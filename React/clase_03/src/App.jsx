import AppWrapper from './components/AppWrapper/AppWrapper.jsx'
import EjemploEnLinea from './components/EjemploEnLinea/EjemploEnLinea.jsx'
import EjemploModule from './components/EjemploModule/EjemploModule.jsx'
import EjemploObjeto from './components/EjemploObjeto/EjemploObjeto.jsx'
import EjemplosMaterial from './components/EjemplosMaterial/EjemplosMaterial.jsx'
import EjemploStyled from './components/EjemploStyled/EjemploStyled.jsx'
import AccordionUsage from './components/EjemplosMaterial/AcordionMaterial.jsx'
import { GlobalStyles } from './components/styles/GlobalStyles.js'

function App() {

  return (
    <>
     <AppWrapper>
        <h1>Hola!!</h1>
        <EjemploEnLinea/>
        <EjemploObjeto/>
        <EjemploModule/>
        <EjemploStyled/>

        <GlobalStyles/>
     </AppWrapper>

     <EjemplosMaterial/>
     <AccordionUsage/>
    </>
  )
}

export default App

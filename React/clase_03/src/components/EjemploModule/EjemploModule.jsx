import estilos from './EjemploModule.module.css'

const EjemploModule = () => {
  return (
    <div className={estilos.contendorModule}>
        <p className={estilos.parrafoModule}>
            Ejemplo de estilos con module
        </p>
    </div>
  )
}

export default EjemploModule
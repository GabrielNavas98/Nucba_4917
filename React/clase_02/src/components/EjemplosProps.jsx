/* eslint-disable react/prop-types */

export const EjemplosProps = ({nombre, apellido, edad, pais}) => {
  return <h2>Hola mi nombre es {nombre} {apellido}, tengo {edad} años y soy de {pais}</h2>
}

EjemplosProps.defaultProps = {
    nombre: 'Gabi',
    edad: 28
}
import React from 'react'
import { useCountContext } from '../../context/CountContext'

const Suma = () => {

  const { dispatch } = useCountContext()

  return (
    <button onClick={() => dispatch({ type: 'SUMA'})}>Suma</button>

  )
}

export default Suma
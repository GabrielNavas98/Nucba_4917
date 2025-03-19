import React from 'react'
import Suma from '../Suma/Suma'
import Resta from '../Resta/Resta'
import { useCountContext } from '../../context/CountContext'

const Counter = () => {

  const {state } = useCountContext()
  return (
    <>
        <Suma/>
        <h1 style={{color: 'crimson'}}>Cuenta: { state.count}</h1>
        <Resta/>
    </>

  )
}

export default Counter
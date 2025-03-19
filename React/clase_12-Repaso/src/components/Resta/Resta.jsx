import React from 'react'
import { useCountContext } from '../../context/CountContext'

const Resta = () => {

  const { dispatch } = useCountContext()

  return (
    <button onClick={() => dispatch({type: 'RESTA'})}>Resta</button>
  )
}

export default Resta
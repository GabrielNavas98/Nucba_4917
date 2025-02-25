import React from 'react'
import { CounterButtonStyled, CounterContainerButtonStyled } from '../counter/CounterStyles'
import { CiCirclePlus } from 'react-icons/ci'
import { PiNumberCircleFive } from 'react-icons/pi'
import { TbMultiplier2X } from 'react-icons/tb'
import { useCountContext } from '../../context/CountContext'
import { TYPES } from '../../actionTypes/actionCounter'

const Add = () => {

    const {dispatch} = useCountContext()

    const handleIncrement = () => dispatch({ type: TYPES.INCREMENT})
    const handleIncrement_5 = () => dispatch({type: TYPES.INCREMENT_5})
    const handleMultiply = () => dispatch({type: TYPES.MULTIPLY})


  return (
    <CounterContainerButtonStyled>
        <CounterButtonStyled onClick={handleIncrement}>
                <CiCirclePlus size={'32px'} color='white'/>
            </CounterButtonStyled>
            <CounterButtonStyled onClick={handleIncrement_5}>
                <p>+<PiNumberCircleFive size={'32px'} color='white'/></p>
            </CounterButtonStyled>
            <CounterButtonStyled onClick={handleMultiply}>
                <TbMultiplier2X size={'32px'} color='white'/>    
            </CounterButtonStyled>
    </CounterContainerButtonStyled>
  )
}

export default Add
import React from 'react'
import { CounterButtonStyled, CounterContainerButtonStyled } from '../counter/CounterStyles'
import { FaDivide } from 'react-icons/fa'
import { PiNumberCircleFive } from 'react-icons/pi'
import { CiCircleMinus } from 'react-icons/ci'
import { useCountContext } from '../../context/CountContext'
import { TYPES } from '../../actionTypes/actionCounter'

const Minus = () => {

    const { dispatch } = useCountContext()

    const handleDecrement = () => dispatch({type: TYPES.DECREMENT})
    const handleDecrement_5 = () => dispatch({type: TYPES.DECREMENT_5})
    const handleDivide = () => dispatch({type: TYPES.DIVIDE})
    

    return (
        <CounterContainerButtonStyled>
            <CounterButtonStyled left onClick={handleDivide}>
                <FaDivide size={'32px'} color='white' />
            </CounterButtonStyled>
            <CounterButtonStyled left onClick={handleDecrement_5}>
                <p>-<PiNumberCircleFive size={'32px'} color='white' /></p>
            </CounterButtonStyled>
            <CounterButtonStyled left onClick={handleDecrement}>
                <CiCircleMinus size={'32px'} color='white' />
            </CounterButtonStyled>
        </CounterContainerButtonStyled>
    )
}

export default Minus
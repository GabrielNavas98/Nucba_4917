import React, { useContext, useReducer, useState } from 'react'
import { CounterButtonStyled, CounterContainerStyled, CounterSpanStyled } from './CounterStyles'

import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";
import { PiNumberCircleFive } from "react-icons/pi";
import { FaDivide } from "react-icons/fa";
import { TbMultiplier2X } from "react-icons/tb";
import { RiResetLeftLine } from "react-icons/ri";
import { counterInitialState, countReducer } from '../../reducer/countReducer';
import { TYPES } from '../../actionTypes/actionCounter';
import Minus from '../minus/Minus';
import Add from '../add/Add';
import { useCountContext } from '../../context/CountContext';

const Counter = () => {
    
    // const [count, setCount] = useState(0)
    // const [state, dispatch] = useReducer(countReducer, counterInitialState)
    const {state, dispatch} = useCountContext()
    
    return (
        <CounterContainerStyled>
           
            <Minus/>

            <CounterSpanStyled>{ state.count }</CounterSpanStyled>
            
            <Add/>

            <CounterButtonStyled onClick={() => dispatch({type: TYPES.RESET})}>
                <RiResetLeftLine  color='red' />
            </CounterButtonStyled>
        </CounterContainerStyled>
    )
}

export default Counter
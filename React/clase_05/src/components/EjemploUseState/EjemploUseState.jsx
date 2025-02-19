import React, { useState } from 'react'
import styled from 'styled-components'

export const ClickBtn = styled.button`
    width: 200px;
    height: 50px;
    background-color: #4747ff;
    color: white;
    border-radius: 10px
`

const EjemploUseState = () => {

    const [isToggle, setIsToggle] = useState(false)

    //Manejador de eventos
    const handleToggle = () => {
        console.log('click')
        //función actualizadora
        setIsToggle( !isToggle )
    }
    return (
        <>
            <span>
                {
                    isToggle ? 'True' : 'False'
                }
            </span>
            
            <ClickBtn onClick={handleToggle}>Click</ClickBtn>

        </>
    )
}

export default EjemploUseState
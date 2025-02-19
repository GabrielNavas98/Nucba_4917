import React, { useRef } from 'react'
import {ClickBtn} from '../EjemploUseState/EjemploUseState'

const EjemploUseRef = () => {

    const title = useRef()

    const handleClick = () => {
        console.log(title)
        console.log(title.current)
        console.dir(title.current)

        title.current.style.color = 'crimson'
        console.log(title.current)

    }
    return (
        <>
            <h2 ref={title}>Soy un h2</h2>
            <ClickBtn onClick={handleClick}>Click</ClickBtn>
        </>
    )
}

export default EjemploUseRef
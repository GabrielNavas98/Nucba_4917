import React, { useEffect, useState } from 'react'
import { ClickBtn } from '../EjemploUseState/EjemploUseState'

const EjemploUseEffect = () => {

    const [click, setClick] = useState(false)

    // console.log('Actualiza y monta')

    useEffect(() => {
        console.log('Se ejecuta una única vez, (Montaje)')
    }, []) //le pasamos la lista dependencias vácia


    useEffect(() => {
        console.log('variable click se actualizo')
    }, [click])

    return (
        <>
            <span>
                {
                    click ? 'true' : 'false'
                }
            </span>
            <ClickBtn onClick={() => setClick(!click)}>Click</ClickBtn>
        </>
    )
}

export default EjemploUseEffect
import React from 'react'
import styled from 'styled-components'
const WrapperGeneral = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #131415;
    color: white;
`

const Wrapper = ({children}) => {
  return (
    <WrapperGeneral>
        {children}
    </WrapperGeneral>
  )
}

export default Wrapper
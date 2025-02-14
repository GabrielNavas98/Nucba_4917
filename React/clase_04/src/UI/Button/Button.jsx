import React from 'react'
import { StyledButton } from './ButtonStyles'

const Button = ({
    children,
    radius = '32',
    disabled = false
}) => {
  return (
    <StyledButton
        radius = {radius}
        disabled={disabled}
        whileTap={{scale: 0.95}}
    >
        {children}
    </StyledButton>
  )
}

export default Button
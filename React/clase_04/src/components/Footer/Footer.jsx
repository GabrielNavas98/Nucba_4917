import React from 'react'
import { FooterContainer, LinksContainerStyled } from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainer>
    <LinksContainerStyled>
      <a href="/#">Términos de Uso</a>
      <a href="/#">Trabajá con Nosotros</a>
      <a href="/#">Soporte</a>
    </LinksContainerStyled>
    <p> Hecho con ❤️ en <span> NUCBAZAPPI</span></p>
    </FooterContainer>
  )
}

export default Footer
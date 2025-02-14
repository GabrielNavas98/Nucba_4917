import React from 'react'
import { HeroContainerStyled, HeroImgContainerStyled, HeroTextContainer } from './HeroStyles'
import Button from '../../UI/Button/Button'

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroTextContainer>
            <h1>Si tenes Zappi,</h1>
            <h2>tenes Nucba.</h2>
            <p>Buscá lo que quieras y Nucba te quedes sin comida</p>
            <Button>Ver Más</Button>
        </HeroTextContainer>

        <HeroImgContainerStyled>
            <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png'
            alt=''
            />
        </HeroImgContainerStyled>


    </HeroContainerStyled>
  )
}

export default Hero
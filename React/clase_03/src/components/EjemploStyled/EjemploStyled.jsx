import { PHeredado, StyledButton, StyledContainer, StyledH4, StyledP } from "./EjemploStyledStyles"

const EjemploStyled = () => {
  return (
    <StyledContainer>
      <StyledH4> Hola soy un h4 estilado con styled components </StyledH4>
      <StyledP> Hola soy un p con styled </StyledP>
      <h3>Soy un h3 común</h3>
      <PHeredado>Soy un p con estilos heredados</PHeredado>
      <StyledButton>Boton</StyledButton>
      <StyledButton color width={'250px'}>Boton</StyledButton>
    </StyledContainer>

  )
}

export default EjemploStyled
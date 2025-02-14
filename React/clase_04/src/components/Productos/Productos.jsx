import React from 'react'
import { products } from '../../data/Products'
import { ButtonContainerStyled, ProductosContainer, ProductosWrapper } from './ProductosStyles'
import Producto from './Producto'
import Button from '../../UI/Button/Button'

const Productos = () => {
  return (
    <ProductosWrapper>
        <h2>Nuestros productos</h2>
        <ProductosContainer>
            {
                products.map((food) => {
                    return <Producto key={food.id} {...food}/>
                })
            }
        </ProductosContainer>

        <ButtonContainerStyled>
            <Button>Ver menos</Button>
            <Button disabled>ver mas</Button>
        </ButtonContainerStyled>
    </ProductosWrapper>
  )
}

export default Productos
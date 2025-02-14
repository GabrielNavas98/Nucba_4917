import React from 'react'
import { CardPrice, ContainerPrice, ProductosCard } from './ProductosStyles'
import Button from '../../UI/Button/Button'

const Producto = ({img, title, desc, price}) => {
  return (
    <ProductosCard whileTap={{scale: 0.95}}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>

        <ContainerPrice>
            <CardPrice>$ {price}</CardPrice>
            <Button>Agregar</Button>
        </ContainerPrice>
    </ProductosCard>
  )
}

export default Producto
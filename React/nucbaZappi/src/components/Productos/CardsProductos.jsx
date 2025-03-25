import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
// import { Products } from '../../data/Products';
import { useSelector } from 'react-redux';

const CardsProductos = () => {

  let products = useSelector(state => state.products.products)

  // console.log(Products)
  // console.log(Object.entries(Products));
  

  return (
    <>
      <ProductosContainer>
       {
        Object.entries(products).map(([, foods]) => (
          foods.map((food) => <CardProducto {...food} key={food.id}/>)
        ))
       }
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={e => e.preventDefault()}
          secondary='true'
          disabled='true'
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={e => e.preventDefault()} disabled='true'>
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;

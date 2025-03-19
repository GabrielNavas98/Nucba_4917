import React from "react";
import { BackButton, Image, ProductDetailContainer } from "./ProductsStyles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {

  const { productID } = useParams()

  const {image, title, price, description, rating, category} = useSelector((state) => state.products.data.find((p) => p.id === +productID))

  return (
    <ProductDetailContainer>
      <Image src={image}/>
      <h2>{title}</h2>
      <p><strong>Categoria:</strong>{category}</p>
      <p><strong>Precio:</strong>${price}</p>
      <p><strong>Rating:</strong>⭐ {rating.rate} / 5</p>
      <p><strong>Reviews:</strong> {rating.count} </p>
      <span>{description}</span>
      <BackButton to='/'>Volver a la tienda</BackButton>
    </ProductDetailContainer>
  );
};

export default ProductDetail;

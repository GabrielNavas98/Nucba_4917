import React, { useEffect } from "react";
import { Image, ProductCard, ProductGrid } from "./HomeStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../helpers/fetchProducts";
import { Link } from "react-router-dom";

const Home = () => {

  const dispatch = useDispatch()

  const {data, isLoading, error} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (isLoading) return <h2 style={{color:'crimson'}}>Cargando....</h2>
  if (error) return <h2 style={{color:'crimson'}}>Error: {error}</h2>

  return (  
    <ProductGrid>
      {
        data && 
          data.map((product) => (
            <Link key={product.id} to={`products/${product.id}`}>
              <ProductCard>
                <Image src={product.image}/>
                <h3>{product.title}</h3>
                <p><strong>Price:</strong>${product.price}</p>
              </ProductCard>
            </Link>
          ))
      }
    </ProductGrid>
  );
};

export default Home;

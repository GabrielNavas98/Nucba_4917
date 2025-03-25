import { useSelector } from "react-redux";
// import { Categories } from "../../data/Categories";
import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";

const Categorias = () => {

  const {categories} = useSelector((state) => state.categories)
  // console.log(categories)
  return (
    <CategoriasContainer>
      {
        categories.map((categoria) => (
          <Categoria {...categoria} key={categoria.id}/>
        ))
      }
    </CategoriasContainer>
  );
};

export default Categorias;

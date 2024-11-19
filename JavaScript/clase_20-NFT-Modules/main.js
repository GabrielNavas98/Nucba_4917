import { cartInit } from "./assets/cart/cart";
import { menuInterfaceInit } from "./assets/menu-interface/menu-interface";
import { productsSectionInit } from "./assets/products-section/products-section";
import { scrollEfectsInit } from "./assets/scroll-effects/scroll";
import { typewriterInit } from "./assets/typeWriter-effect/typeWriter";

//Función inicializadora
const init = () => {
  productsSectionInit();
  cartInit();
  menuInterfaceInit();
  typewriterInit();
  scrollEfectsInit();
};

init();

import { useSelector } from "react-redux";
import CheckoutForm from "../../components/Checkout/Form/CheckoutForm";
import ProductsCheckout from "../../components/Checkout/Products/ProductsCheckout";
import { ContainerCheckoutStyled } from "../Checkout/CheckoutStyles";
import { totalPrice } from "../../utils";

const Checkout = () => {

  const { cartItems, shippingCost} = useSelector(state => state.cart)
  const cartTotalPrice = totalPrice(cartItems)
  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm 
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={cartTotalPrice}
        />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={cartTotalPrice}
        />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;

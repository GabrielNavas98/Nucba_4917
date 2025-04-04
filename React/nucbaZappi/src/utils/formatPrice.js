export const formatPrice = price => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};

//para calcular el total del carrito
export const totalPrice = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)
}
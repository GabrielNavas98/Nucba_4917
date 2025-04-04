import { createSlice } from '@reduxjs/toolkit'
import { SHIPPING_COST } from '../../utils/constants'
import { addItemToCart, removeItemFromCart, resetShippingCost } from './cartUtils'

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers:{
        //Agregar un producto (unidad)
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                shippingCost: SHIPPING_COST
            }
        },
        //remover un producto (unidad)
        removeFromCart: (state, action) => {
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
            }
        },
        //Remover todos los productos del cart
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
                shippingCost: 0
            }
        },
        //toggle del carrito
        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
    }
})

export const {
    addToCart,
    clearCart,
    removeFromCart,
    toggleHiddenCart
} = cartSlice.actions

export default cartSlice.reducer


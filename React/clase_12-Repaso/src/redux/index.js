import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productSlice/productSlice'

export const store = configureStore({
    reducer:{
        products: productsReducer
    }
})
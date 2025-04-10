import { createSlice } from "@reduxjs/toolkit"


const INITIAL_STATE = {
    orders: null,
    loading: false,
    error: null
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState: INITIAL_STATE,
    reducers: {
        createOrderFail: (state = INITIAL_STATE, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
        fetchOrderSucess: (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                orders: [ ...action.payload]
            }
        },
        fetchOrderFail : (state, action) => {
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        fetchOrderStart: (state) => {
            return{
                ...state,
                loading: true
            }
        },
        clearError: (state) => {
            return{
                ...state,
                error: null
            }
        },
        clearOrders: (state) => {
            return {
                ...state,
                orders: null
            }
        }
    } 
})

export const {
    createOrderFail,
    fetchOrderSucess,
    fetchOrderFail,
    fetchOrderStart,
    clearError,
    clearOrders
} = orderSlice.actions

export default orderSlice.reducer
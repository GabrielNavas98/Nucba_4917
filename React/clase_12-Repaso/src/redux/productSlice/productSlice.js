import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        isFetching: (state) => {
            return {
                ...state,
                isLoading: true,
                data: null
            }
        },
        success: (state, action) => {
            return{
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            }
        },
        isError: (state)=> {
            return {
                ...state, 
                data: null,
                isLoading: false,
                error: 'Ocurrio un error, recarga'
            }
        }
    }
})

export const {
    isFetching,
    success, 
    isError
} = productsSlice.actions

export default productsSlice.reducer
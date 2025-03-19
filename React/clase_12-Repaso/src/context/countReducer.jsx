export const countInitialState = { count: 0}


export const countReducer = (state, action) => {
    switch (action.type) {
        case 'SUMA':
            return {
                ...state,
                count: state.count + 1
            }
        case 'RESTA':
            return{
                ...state,
                count: state.count - 1
            }    
        default:
            return countInitialState
    }
}
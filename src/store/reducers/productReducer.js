const initialState = {
    data: [],
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
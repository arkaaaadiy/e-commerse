const initialState = {
    data: []
}


export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_FAVORITE':
            return {
                ...state,
                data: [...state.data, action.item]
            };
        default:
            return state
    }
}
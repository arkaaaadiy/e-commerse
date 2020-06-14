const initialState = {
    data: [
        {
            id: '43b7ea71-8abb-479f-bcc0-e776e0990f2b',
            name: 'Tasty Plastic Soap',
            brand: 'Mango',
            category: 'Keyboard',
            subcategory: 'tops',
            photo: 'https://i.ibb.co/KG4PDKM/photo2.png',
            size: 'S',
            color: 'turquoise',
            price: '749.00',
            rating: 2,
            voises: 12,
            newItem: 'true',
            soldOut: false,
            discont: '20'
        }
    ]
}


export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_FAVORITE':
            return {
                ...state,
                data: [...state.data, action.item]
            };
        case 'DELETE_PRODUCT_FAVORITE':
            return {
                ...state,
                data: [...state.data.filter(item => item.id !== action.id)]
            };
        default:
            return state
    }
}
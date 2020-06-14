import photo1 from '../../assets/bag1.png';
import photo2 from '../../assets/bag2.png';
import photo3 from '../../assets/bag3.png';

const initialState = {
    products: [{
            id: 1,
            photo: photo1,
            name: 'Pullover',
            count: 1,
            color: 'Black',
            price: 51,
            size: 'L'
        },
        {
            id: 2,
            photo: photo2,
            name: 'T-Shirt',
            count: 1,
            color: 'Black',
            price: 30,
            size: 'L'
        },
        {
            id: 3,
            photo: photo3,
            name: 'Sport Dress',
            count: 1,
            color: 'Black',
            price: 41,
            size: 'M'
        },
    ]

}


export const bagReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNT_ADD':
            return {
                products: state.products.map(item => item.id === action.id ? {...item, count: item.count + 1} : item)
            };
        case 'COUNT_SUB':
            return {
                products: state.products.map(item => item.id === action.id ? {...item, count: item.count - 1}  : item)
            };
        case 'ADD_TO_BAG':
            return {
                products: [...state.products, {
                    id: action.item.id,
                    photo: action.item.photo,
                    name: action.item.name,
                    count: 1,
                    color: action.item.color,
                    price: Math.round(action.item.price - (action.item.price * action.item.discont / 100)),
                    size: action.item.size,
                }]
            };
        default:
            return state
    }
}
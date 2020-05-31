import photo1 from '../../assets/product/photo1.png';
import photo2 from '../../assets/product/photo2.png';
import photo3 from '../../assets/product/photo3.png';
import photo4 from '../../assets/product/photo4.png';

const initialState = {
    data: [
        {
            name: 'Shirt',
            brand: 'Mango',
            category: 'Clothes',
            subcategory: 'tops',
            photo: photo4,
            size: ['XS', 'S', 'M', 'L', 'XL'],
            color: ['Black'],
            price: 25,
            rating: 4,
            voises: 3,
            newItem: true,
            soldOut: false,
            discont: false,
        },
        {
            name: 'Light blouse ',
            brand: 'Dorothy Perkins',
            category: 'Clothes',
            subcategory: 'tops',
            photo: photo1,
            size: ['XS', 'S', 'M', 'L', 'XL'],
            color: ['White'],
            price: 21,
            rating: 4,
            voises: 3,
            newItem: false,
            soldOut: false,
            discont: 20,
        },
        {
            name: 'T-Shirt SPANISH',
            brand: 'Mango',
            category: 'Clothes',
            subcategory: 'tops',
            photo: photo2,
            size: ['XS', 'S', 'M', 'L', 'XL'],
            color: ['Black'],
            price: 9,
            rating: 0,
            voises: 0,
            newItem: true,
            soldOut: false,
            discont: false,
        },
        {
            name: 'Blouse',
            brand: 'Dorothy Perkins',
            category: 'Clothes',
            subcategory: 'tops',
            photo: photo3,
            size: ['XS', 'S', 'M', 'L', 'XL'],
            color: ['Black'],
            price: 21,
            rating: 4,
            voises: 3,
            newItem: true,
            discont: false,
            soldOut: false,
        },
              
    ],
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':

            return state;
        default:
            return state
    }
}
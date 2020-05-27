import image1 from '../../assets/product/image1.png'
import image2 from '../../assets/product/image2.png'
import image3 from '../../assets/product/image3.png'
import image4 from '../../assets/product/image4.png'
import image5 from '../../assets/product/image5.png'

const initialState = {
    maindata: [{
        title: 'New',
        subtitle: 'You’ve never seen it before!',
        product: [{
                photo: image1,
                name: 'Blouse',
                color: 'Red',
                size: ['XS', 'S', 'L', 'M'],
                price: '30',
                brand: 'OVS',
                rating: '4',
                // discont: '30',
                newItem: true,
                voises: '5'
                // soldOut: true
            },
            {
                photo: image2,
                name: 'T-Shirt Sailing',
                color: 'White',
                size: ['XS', 'S', 'L', 'M'],
                price: '10',
                brand: 'Mango Boy',
                rating: '4',
                // discont: '30',
                newItem: true,
                voises: '10',
                // soldOut: true
            },
            {
                photo: image2,
                name: 'Jeans',
                color: 'White',
                size: ['XS', 'S', 'L', 'M'],
                price: '45',
                brand: 'Cool',
                rating: '5',
                // discont: '30',
                newItem: true,
                voises: '3',
                // soldOut: true
            },
            
            ]
        },
        {title: 'Sale', subtitle: 'Super summer sale', product: [
            {
                photo: image3,
                name: 'Pullover',
                color: 'Rose',
                size: ['XS', 'S', 'L', 'M'],
                price: '15',
                brand: 'Dorothy Perkins',
                rating: '5',
                discont: '20',
                // newItem: true,
                voises: '10',
                // soldOut: true
            },
            {
                photo: image4,
                name: 'Sport Dress',
                color: 'Gray',
                size: ['XS', 'S', 'L', 'M'],
                price: '22',
                brand: 'Sitlly',
                rating: '5',
                discont: '15',
                // newItem: true,
                voises: '8'
                // soldOut: true
            },
            {
                photo: image5,
                name: 'Sport Dress',
                color: 'White',
                size: ['XS', 'S', 'L', 'M'],
                price: '14',
                brand: 'Mango',
                rating: '4',
                discont: '20',
                // newItem: true,
                voises: '10',
                // soldOut: true
            },
        ]}
    ]
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':

            return state;
        default:
            return state
    }
}
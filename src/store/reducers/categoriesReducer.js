import img1 from '../../assets/categories/image1.png'
import img2 from '../../assets/categories/image2.png'
import img3 from '../../assets/categories/image3.png'
import img4 from '../../assets/categories/image4.png'

const initialState = {
    tabs: [{
            id: 1,
            name: 'Women',
            cards: [{
                    name: 'New',
                    image: img1
                },
                {
                    name: 'Clothes',
                    image: img2,
                    category: [{
                            name: 'Tops'
                        },
                        {
                            name: 'Shirts & Blouses'
                        },
                        {
                            name: 'Cardigans & Sweaters'
                        },
                        {
                            name: 'Knitwear'
                        },
                        {
                            name: 'Blazers'
                        },
                        {
                            name: 'Outerwear'
                        },
                        {
                            name: 'Pants'
                        },
                        {
                            name: 'Jeans'
                        },
                        {
                            name: 'Shorts'
                        },
                        {
                            name: 'Skirts'
                        },
                        {
                            name: 'Dresses'
                        },
                    ]
                },
                {
                    name: 'Shoes',
                    image: img3
                },
                {
                    name: 'Accesories',
                    image: img4
                },
            ]
        },
        {
            id: 2,
            name: 'Men',
            cards: [{
                    name: 'New',
                    image: img4
                },
                {
                    name: 'Clothes',
                    image: img3
                },
                {
                    name: 'Shoes',
                    image: img2
                },
                {
                    name: 'Accesories',
                    image: img1
                },
            ]
        },
        {
            id: 3,
            name: 'Kids',
            cards: [{
                    name: 'New',
                    image: img2
                },
                {
                    name: 'Clothes',
                    image: img3
                },
                {
                    name: 'Shoes',
                    image: img1
                },
                {
                    name: 'Accesories',
                    image: img4
                },
            ]
        },
    ],    
    
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':

            return state;

        default:
            return state
    }
}
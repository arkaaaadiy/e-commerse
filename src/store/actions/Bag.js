
export const addCount = (id) => ({
    type: 'COUNT_ADD',
    id
})

export const subCount = (id) => ({
    type: 'COUNT_SUB',
    id
})

export const addToBag = (item) => ({
    type: 'ADD_TO_BAG',
    item
})

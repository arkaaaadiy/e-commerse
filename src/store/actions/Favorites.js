export const addItemToFavorites = (item) => ({
    type: 'ADD_PRODUCT_FAVORITE',
    item
})

export const deleteItemInFavorites = (id) => ({
    type: 'DELETE_PRODUCT_FAVORITE',
    id
})
export const getProducts = () => {
    return async (dispatch) => {
        try {
            const jsondata = await fetch('http://localhost:3333/product')
            const data = await jsondata.json()            
            dispatch({
                type: 'FETCH_PRODUCTS',
                data
            })
        } catch (e) {
            console.log(e)
        }
    }
}



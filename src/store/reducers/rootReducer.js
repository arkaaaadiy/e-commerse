import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { mainReducer } from './mainReducer'
import { categoriesReducer } from "./categoriesReducer";
import { productReducer } from "./productReducer";
import { bagReducer } from "./bagReducer";

export default combineReducers({
    app: appReducer,
    main: mainReducer,
    categories: categoriesReducer,
    product: productReducer,
    bag: bagReducer,
})
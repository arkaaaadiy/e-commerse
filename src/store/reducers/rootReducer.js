import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { mainReducer } from './mainReducer'
import { categoriesReducer } from "./categoriesReducer";

export default combineReducers({
    app: appReducer,
    main: mainReducer,
    categories: categoriesReducer
})
import { combineReducers } from "redux"
import cart from "./cart/reducer"
import featured from "./featured/reducer"
import products from "./products/reducer"

export default combineReducers({
    cart,
    featured,
    products
})
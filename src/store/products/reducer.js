import createReducer from "store/create-reducer"
import * as ActionType from "store/action-type"

const initialState = []

export default createReducer({
    [ActionType.ADD_PRODUCTS](existing, newProducts) {
        return [...existing, ...newProducts]
    }
}, initialState)
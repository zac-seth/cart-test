import createReducer from "store/create-reducer"
import * as ActionType from "store/action-type"

const initialState = {}

export default createReducer({
    [ActionType.SET_FEATURED](oldFeature, newFeature) {
        return newFeature
    }
}, initialState)
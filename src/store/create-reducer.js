export default function createReducer(reducerMethods, initialState) {
    const types = Object.keys(reducerMethods)

    return function (previousState = initialState, action) {
        const type = types.find(type => type === action.type) || false

        if (!type) {
            return previousState
        } else {
            return reducerMethods[type](previousState, action.payload)
        }
    }
}
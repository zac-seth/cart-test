import createReducer from "store/create-reducer"
import * as ActionType from "store/action-type"

const initialState = []

export default createReducer({
    [ActionType.ADD_TO_CART](cart, item) {
        return [...cart, item]
    },

    [ActionType.DECREMENT_CART_ITEM](cart, incrementedItem) {
        return cart.map(item => {
            if (item.id === incrementedItem.id && item.count > 0) {
                return {
                    ...item,
                    count: item.count - 1
                }
            } else {
                return item
            }
        })
    },

    [ActionType.INCREMENT_CART_ITEM](cart, decrementedItem) {
        return cart.map(item => {
            if (item.id === incrementedItem.id) {
                return {
                    ...item,
                    count: item.count - 1
                }
            } else {
                return item
            }
        })
    },

    [ActionType.REMOVE_FROM_CART](cart, removedItem) {
        return cart.filter(item => item.id !== removedItem.id)
    }
}, initialState)
import { createAction } from "store/create-action"
import * as ActionType from "store/action-type"

export function addToCart(item) {
    return createAction(ActionType.ADD_TO_CART, item)
}

export function decrementCartItem(item) {
    return createAction(ActionType.DECREMENT_CART_ITEM, item)
}

export function incrementCartItem(item) {
    return createAction(ActionType.INCREMENT_CART_ITEM, item)
}

export function removeFromCart(item) {
    return createAction(ActionType.REMOVE_FROM_CART, item)
}
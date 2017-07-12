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

export function addProductToCartAsync(productId) {
    return async (dispatch, getState) => {
        const { cart } = getState()
        const cartItem = cart.find(({ id }) => id === productId)
        
        if (!cartItem) {
            dispatch(addToCart({ id: productId, count: 1 }))
        } else {
            dispatch(incrementCartItem(cartItem))
        }

        return await Promise.resolve(null)
    }
}

export function decreaseCartItemCountAsync(productId) {
    return async (dispatch, getState) => {
        const { cart } = getState()
        const cartItem = cart.find(({ id }) => id === productId)

        if (cartItem.count === 1) {
            dispatch(removeFromCart(cartItem))
        } else {
            dispatch(decrementCartItem(cartItem))
        }

        return await Promise.resolve()
    }
}

export function increaseCartItemCountAsync(productId) {
    return async (dispatch, getState) => {
        const { cart } = getState()
        const cartItem = cart.find(({ id }) => id === productId)

        dispatch(incrementCartItem(cartItem))

        return Promise.resolve()
    }
}
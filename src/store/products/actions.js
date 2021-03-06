import { createAction } from "store/create-action"
import * as ActionType from "store/action-type"

export function addProducts(products) {
    return createAction(ActionType.ADD_PRODUCTS, products)
}
import { createAction } from "store/create-action"
import * as ActionType from "store/action-type"

export function setFeatured(featured) {
    return createAction(ActionType.SET_FEATURED, featured)
}
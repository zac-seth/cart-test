import { setFeatured } from "./featured/actions"
import { addProducts } from "./products/actions"

export function loadDataAsync() {
    return async dispatch => {
        var response = await fetch('/data/db.json')
        var db = await response.json()

        await dispatch(addProducts(db.products))
        await dispatch(setFeatured(db.featured_product))
        console.log("Loaded database: ", db)
    }
}
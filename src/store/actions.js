import { setFeatured } from "./featured/actions"
import { addProducts } from "./products/actions"

export function loadDataAsync() {
    return async dispatch => {
        var response = await fetch('/data/db.json')
        var db = await response.json()

        // NOTE: I'm converting the price to a number here.
        // It's easier for calculations in the cart and we can easily render 
        // the '$' symbol in the view when needed.
        await dispatch(addProducts(db.products.map(product => ({
            ...product,
            price: makePriceNumber(product.price)
        }))))

        // NOTE: I'm assuming that there will only ever be a single featured
        // product. Therefore, I give it a special product id as there was none
        // supplied in the source data - I'm not really sure how this would
        // work when sending the order to the server though...
        await dispatch(setFeatured({
            ...db.featured_product, 
            id: 0,
            price: makePriceNumber(db.featured_product.price)
        }))
    }
}

function makePriceNumber(price) {
    return parseInt(price.substr(1))
}
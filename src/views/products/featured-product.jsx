import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addProductToCartAsync } from "store/cart/actions"
import Panel from "elements/panel"

let FeaturedProduct = ({ featured, onAddToCart }) => (
    <Panel>
        <p>{featured.name}</p>
        <p>{featured.description}</p>
        <button onClick={() => onAddToCart(featured.id)}>Pre-Order for ${featured.price}</button>
    </Panel>
)

FeaturedProduct.propTypes = {
    featured: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,

    onAddToCart: PropTypes.func.isRequired
}

FeaturedProduct = connect(
    ({ featured }) => ({
        featured
    }),
    dispatch => ({
        onAddToCart: async productId => {
            await dispatch(addProductToCartAsync(productId))
        }
    })
)(FeaturedProduct)

export default FeaturedProduct
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addProductToCartAsync } from "store/cart/actions"
import ListItem from "elements/list-item"

let ProductItem = ({product, onAddToCart}) => (
    <ListItem>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => onAddToCart()}>Add to Cart</button>
    </ListItem>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired
}

ProductItem = connect(
    ({products}, {id}) => ({
        product: products.find(product => product.id === id)
    }),
    (dispatch, {id}) => ({
        onAddToCart: async () => {
            await dispatch(addProductToCartAsync(id))
        }
    })
)(ProductItem)

ProductItem.propTypes = {
    id: PropTypes.number.isRequired
}

export default ProductItem
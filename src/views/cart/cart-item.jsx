import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
    decreaseCartItemCountAsync,
    increaseCartItemCountAsync
} from "store/cart/actions"
import ListItem from "elements/list-item"
import Panel from "elements/panel"

let CartItem = ({ item, onDecreaseCount, onIncreaseCount }) => {
    const {
        count,
        product
    } = item
    
    return (
        <ListItem>
            <p>{product.name}</p>
            <p><button onClick={() => onDecreaseCount()}>{count === 1 ? "x" : "-"}</button> {count} <button onClick={() => onIncreaseCount()}>+</button></p>
        </ListItem>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        count: PropTypes.number.isRequired,
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        }).isRequired
    }).isRequired,

    onDecreaseCount: PropTypes.func.isRequired,
    onIncreaseCount: PropTypes.func.isRequired
}

CartItem = connect(
    ({ cart, products, featured }, { id }) => ({
        item: formatCartItem(id, cart, products, featured)
    }),
    (dispatch, { id }) => ({
        onDecreaseCount: async () => {
            await dispatch(decreaseCartItemCountAsync(id))
        },

        onIncreaseCount: async () => {
            await dispatch(increaseCartItemCountAsync(id))
        }
    })
)(CartItem)

CartItem.propTypes = {
    id: PropTypes.number.isRequired
}

export default CartItem

function formatCartItem(id, cart, products, featured) {
    const { count } = cart.find(item => item.id === id)

    return mapCartItem(
        count, 
        id === featured.id 
            ? featured 
            : products.find(product => product.id === id)
    )
}

function mapCartItem(count, product) {
    return {
        count,
        product: {
            id: product.id,
            name: product.name,
            price: product.price
        }
    }
}
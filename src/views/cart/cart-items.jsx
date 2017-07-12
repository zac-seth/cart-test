import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import List from "elements/list"
import Panel from "elements/panel"
import CartItem from "./cart-item"

let CartItems = ({ productIds }) => (
    <Panel>
        <List>{productIds.map(id => <CartItem id={id} key={id} />)}</List>
    </Panel>
)

CartItems.propTypes = {
    productIds: PropTypes.arrayOf(PropTypes.number).isRequired
}

CartItems = connect(
    ({ cart, products }) => ({
        productIds: cart.map(item => item.id)
    })
)(CartItems)

export default CartItems
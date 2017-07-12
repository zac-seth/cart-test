import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { calculateTotal } from "store/cart/calculations"
import Header from "elements/header"
import LayoutRow from "elements/layout-row"
import LayoutCell from "elements/layout-cell"

let CartHeader = ({ itemCount, total }) => (
    <Header>
        <LayoutRow>
            <LayoutCell>Items in Cart: {itemCount}</LayoutCell>
            <LayoutCell>${total}</LayoutCell>
        </LayoutRow>
    </Header>
)

CartHeader.propTypes = {
    itemCount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

CartHeader = connect(
    (state) => ({
        itemCount: state.cart.length,
        total: calculateTotal(state)
    })
)(CartHeader)

export default CartHeader
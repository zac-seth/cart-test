import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { calculateTotal } from "store/cart/calculations"
import LayoutCell from "elements/layout-cell"
import LayoutRow from "elements/layout-row"
import List from "elements/list"
import ListItem from "elements/list-item"
import Panel from "elements/panel"

let CartTotal = ({total}) => (
    <Panel>
        <List>
            <ListItem>
                <LayoutRow>
                    <LayoutCell cols={1}>Shipping</LayoutCell>
                    <LayoutCell cols={1}>FREE</LayoutCell>
                </LayoutRow>
            </ListItem>
            <ListItem>
                <LayoutRow>
                    <LayoutCell cols={1}>Total</LayoutCell>
                    <LayoutCell cols={1}>${total}</LayoutCell>
                </LayoutRow>
            </ListItem>
        </List>
    </Panel>
)

CartTotal.propTypes = {
    total: PropTypes.number.isRequired
}

CartTotal = connect(
    state => ({ total: calculateTotal(state) })
)(CartTotal)

export default CartTotal
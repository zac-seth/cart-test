import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import List from "elements/list"
import Panel from "elements/panel"
import ProductItem from "./product-item"

let ProductList = ({ productIds }) => (
    <Panel>
        <List>{productIds.map(id => <ProductItem id={id} key={id} />)}</List>
    </Panel>
)

ProductList.propTypes = {
    productIds: PropTypes.arrayOf(PropTypes.number).isRequired
}

ProductList = connect(
    ({ products }) => ({
        productIds: products.map(product => product.id)
    })
)(ProductList)

export default ProductList
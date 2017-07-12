import React from "react"
import PanelGroup from "elements/panel-group"
import CartItems from "./cart-items"
import CartTotal from "./cart-total"
import FeaturedProduct from "views/products/featured-product"

export default () => (
    <PanelGroup>
        <CartTotal />
        <CartItems />
        <FeaturedProduct />
    </PanelGroup>
)
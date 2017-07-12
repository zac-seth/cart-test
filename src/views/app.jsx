import React from "react"
import AppContainer from "elements/app-container"
import LayoutCell from "elements/layout-cell"
import LayoutRow from "elements/layout-row"
import Header from "./header"
import Cart from "./cart/cart"
import Products from "./products/products"

export default () => (
    <AppContainer>
        <Header>Hello Cart</Header>
        <LayoutRow>
            <LayoutCell cols={2}><Products /></LayoutCell>
            <LayoutCell cols={1}><Cart /></LayoutCell>
        </LayoutRow>
    </AppContainer>
)
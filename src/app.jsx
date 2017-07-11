import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter, RouteProps } from "react-router-dom"
import StyletronClient from "styletron-client"
import { StyletronProvider } from "styletron-react"
import CartTest from "./cart-test"

export default ({ routes, store, styletron }) => (
    <ReduxProvider store={store}>
        <StyletronProvider styletron={styletron}>
            <BrowserRouter>
                <CartTest routes={routes} />
            </BrowserRouter>
        </StyletronProvider>
    </ReduxProvider>
)
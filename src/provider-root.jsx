import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import StyletronClient from "styletron-client"
import { StyletronProvider } from "styletron-react"
import App from "./views/app"

export default ({ store, styletron }) => (
    <ReduxProvider store={store}>
        <StyletronProvider styletron={styletron}>
            <App />
        </StyletronProvider>
    </ReduxProvider>
)
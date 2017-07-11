import React from "react"
import ReactDOM from "react-dom"
import StyletronClient from "styletron-client"
import routes from "./routes"
import configureStore from "store/index"
import { loadDataAsync } from "store/actions"
import App from "./app"

import "isomorphic-fetch"

async function setupStore() {
    const store = configureStore()
    await store.dispatch(loadDataAsync())

    return store
}

async function runApp() {
    const store = await setupStore()
    const styletron = new StyletronClient([document.getElementById("styles")])

    ReactDOM.render(<App store={store} styletron={styletron} routes={routes} />, document.getElementById("cart-test"))
}

runApp()
    .then(function() {
        console.log("App initialised.")
    })
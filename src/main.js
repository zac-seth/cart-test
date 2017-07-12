import React from "react"
import ReactDOM from "react-dom"
import StyletronClient from "styletron-client"
import configureStore from "store/index"
import { loadDataAsync } from "store/actions"
import ProviderRoot from "./provider-root"

import "isomorphic-fetch"
import "minireset.css"

async function setupStore() {
    const store = configureStore()
    await store.dispatch(loadDataAsync())

    return store
}

async function runApp() {
    const store = await setupStore()
    const styletron = new StyletronClient([document.getElementById("styles")])

    ReactDOM.render(<ProviderRoot store={store} styletron={styletron} />, document.getElementById("cart-test"))
}

runApp()
    .then(function() {
        console.log("App initialised.")
    })
import React from "react"
import ReactDOM from "react-dom"
import StyletronClient from "styletron-client"
import routes from "./routes"
import configureStore from "store/index"
import App from "./app"

console.log('react import', React)
console.log('Javascript loaded')

function setupStore() {
    const store = configureStore()

    return Promise.resolve(store)
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
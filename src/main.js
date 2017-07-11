import configureStore from "store/index"

console.log('Javascript loaded');

function setupStore() {
    const store = configureStore()

    return Promise.resolve(store)
}

async function run() {
    const store = await setupStore()


}

run()
    .then(function() {
        console.log("App initialised.")
    })
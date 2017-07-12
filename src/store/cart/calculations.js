export function calculateTotal({ cart, products, featured }) {
    const itemTotals = []

    cart.forEach(({ count, id }) => {
        const price = featured.id === id
            ? featured.price
            : products.find(product => product.id === id).price

        itemTotals.push(count * price)
    })

    return itemTotals.reduce((total, itemTotal) => total + itemTotal, 0)
}
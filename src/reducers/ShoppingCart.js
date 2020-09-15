const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (good, item = {}, quantity) => {
    const {
        id = good.id,
        count = 0,
        title = good.title,
        total = 0
    } = item

    return {
        id, title, count: count + quantity,
        total: total + quantity * good.price
    }
}

const updateOrder = (state, goodId, quantity) => {
    const { GoodList: { goods }, shoppingCart: { cartItems } } = state
    const good = goods.find(({ id }) => id === goodId)
    const itemIndex = cartItems.findIndex(({ id }) => id === goodId)
    const item = cartItems[itemIndex]


    const newItem = updateCartItem(good, item, quantity)
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }

}

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: null
        }
    }
    switch (action.type) {
        case 'GOOD_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)

        case 'GOOD_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)

        case 'ALL_GOODS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)
        default:
            return state.shoppingCart
    }
}

export default updateShoppingCart
const updateCartItems = (wishItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...wishItems.slice(0, idx),
            ...wishItems.slice(idx + 1)
        ]
    }
    if (idx === -1) {
        return [
            ...wishItems,
            item
        ]
    }
    return [
        ...wishItems.slice(0, idx),
        item,
        ...wishItems.slice(idx + 1)
    ]
}

const updateCartItem = (good, item = {}, quantity) => {
    const {
        id = good.id,
        count = 0,
        title = good.title,
        total = 0,
        image = good.coverImage,
        price = good.price,
        author = good.author
    } = item

    return {
        id, title, image, price, author, quantity, count: count + quantity,
        total: total + quantity * good.price
    }
}

const updateOrder = (state, goodId, quantity) => {
    const { GoodList: { goods }, WishList: { wishItems } } = state
    const good = goods.find(({ id }) => id === goodId)
    const itemIndex = wishItems.findIndex(({ id }) => id === goodId)
    const item = wishItems[itemIndex]


    const newItem = updateCartItem(good, item, quantity)
    return {
        orderTotal: 0,
        wishItems: updateCartItems(wishItems, newItem, itemIndex)
    }

}


const updateWishList = (state, action) => {

if (state === undefined) {
    return {
        wishItems : []
    }

}
switch(action.type){
    case 'GOOD_ADDED_TO_WISHLIST' :
        return updateOrder(state, action.payload, 1)
    case 'GOOD_REMOVED_FROM_WISHLIST':
        return updateOrder(state, action.payload, -1)
    default:
        return state.WishList
}


}

export default updateWishList
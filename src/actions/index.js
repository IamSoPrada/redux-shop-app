const goodsLoaded = (newGoods) => {
    return {
        type: 'FETCH_GOODS_SUCCESS',
        payload: newGoods
    }
}
const goodsRequested = () =>{
    return {
        type: 'FETCH_GOODS_REQUEST'
    }
}
const goodsError = (error) => {
    return {
        type: 'FETCH_GOODS_FAILURE',
        payload: error
    }
}

export const goodAddedToCart = (goodId) => {
    return {
        type: 'GOOD_ADDED_TO_CART',
        payload: goodId
    }
}

export const goodAddedToWishList = (goodId) => {
    return {
        type: 'GOOD_ADDED_TO_WISHLIST',
        payload: goodId
    }
}
export const goodRemovedFromWishList = (goodId) => {
    return {
        type: 'GOOD_REMOVED_FROM_WISHLIST',
        payload: goodId
    }
}

export const goodRemovedFromCart = (goodId) => {
    return {
        type: 'GOOD_REMOVED_FROM_CART',
        payload: goodId
    }
}
export const allGoodsRemovedFromCart = (goodId) => {
    return {
        type: 'ALL_GOODS_REMOVED_FROM_CART',
        payload: goodId
    }
}
export const allGoodsRemovedFromWishList = (goodId) => {
    return {
        type: 'ALL_GOODS_REMOVED_FROM_WISHLIST',
        payload: goodId
    }
}

export const allGoodsFromWishListAddedToCart = (wishedItems) => {
    return {
        type: 'ALL_GOODS_FROM_WISHLIST_ADDED_TO_CART',
        payload: wishedItems
    }
}

export const totalReducer = (current) => {
    let reducer = (accumulator, current) => accumulator + current
    let reducedTotal = current.reduce(reducer, 0);
    return reducedTotal;
}


const fetchGoods = (goodStoreService, dispatch) => () => {
    dispatch(goodsRequested())
    goodStoreService.getGoods()
        .then((data) => dispatch(goodsLoaded(data)))
        .catch((err) => goodsError(err))
}


export {
    fetchGoods
}
import updateGoodList from "./GoodList"
import updateShoppingCart from "./ShoppingCart"
import updateWishList from "./WishList"


const reducer = (state, action) => {

    return {
        GoodList: updateGoodList(state, action),
        WishList: updateWishList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}


export default reducer;
import updateGoodList from "./GoodList"
import updateShoppingCart from "./ShoppingCart"
import updateWishList from "./WishList"
import appFind from "./Find"

const reducer = (state, action) => {

    return {
        GoodList: updateGoodList(state, action),
        WishList: updateWishList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        appFind: appFind(state, action)
    }
}


export default reducer;
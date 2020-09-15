import updateGoodList from "./GoodList"
import updateShoppingCart from "./ShoppingCart"


const reducer = (state, action) => {

    return {
        GoodList: updateGoodList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}


export default reducer;
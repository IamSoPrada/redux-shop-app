const updateWishList = (state, action) => {

if (state === undefined) {
    return {
        wishItems : []
    }

}
switch(action.type){
    case 'GOOD_ADDED_TO_WISHLIST' :
        return
    case 'GOOD_REMOVED_FROM_WISHLIST':
        return 
    default:
        return state.wishItems
}


}

export default updateWishList
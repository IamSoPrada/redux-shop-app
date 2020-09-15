 const updateGoodList = (state, action) => {
    if (state === undefined) {
        return {
            goods: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case 'FETCH_goods_REQUEST':
            return {
                goods: [],
                loading: true,
                error: null
            }

        case 'FETCH_goods_SUCCESS':
            return {
                goods: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_goods_FAILURE':
            return {
                goods: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.GoodList
    }
}

export default updateGoodList;
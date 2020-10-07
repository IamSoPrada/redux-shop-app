import { FIND_GOOD } from "../actions/types"

const appFind = (state, action) => {

    const { type, payload } = action


    if (state === undefined) {
        return {
            findGood: ""
        }
    }
    switch (type) {
        case FIND_GOOD:
            return {
                findGood: payload
            }
        default:
            return state.appFind
    }

}

export default appFind;
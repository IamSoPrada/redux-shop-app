import {
    FIND_GOOD
} from "./types"

export const onFindGood = (input) => {
    return {
        type: FIND_GOOD,
        payload: input
    }
}
import React from "react"
import { GoodStoreServiceConsumer } from "../goodstore-service-context"


const WithGoodStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <GoodStoreServiceConsumer>
                {
                    (GoodStoreService) => {
                        return (<Wrapped {...props} goodStoreService={GoodStoreService} />)
                    }
                }
            </GoodStoreServiceConsumer>

        )
    }
}
export default WithGoodStoreService;
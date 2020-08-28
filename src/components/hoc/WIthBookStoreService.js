import React from "react"
import { BookStoreServiceConsumer } from "../bookstore-service-context"


const WithBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (BookStoreService) => {
                        return (<Wrapped {...props} bookStoreService={BookStoreService} />)
                    }
                }
            </BookStoreServiceConsumer>

        )
    }
}
export default WithBookStoreService;
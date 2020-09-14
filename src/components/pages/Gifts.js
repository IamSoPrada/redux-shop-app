import React from 'react'
import BookList from "../book-list"
import Categories from "../categories"

 const Gifts = () => {
    return (
        <div>
            <Categories />
            <BookList gifts={true}/>
        </div>
    )
}
export default Gifts;
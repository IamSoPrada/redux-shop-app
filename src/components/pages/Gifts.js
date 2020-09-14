import React from 'react'
import BookList from "../book-list"
import Categories from "../categories"

 const Gifts = () => {
    const category = "Игры, пазлы и игрушки"
    return (
        <div>
            <Categories />
            <BookList category={category}/>
        </div>
    )
}
export default Gifts;
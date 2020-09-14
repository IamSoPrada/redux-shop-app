import React from 'react'
import BookList from "../book-list"
import Categories from "../categories"

 const Books = () => {
    const category = "Программирование"
    return (
        <div>
            <Categories />
            <BookList category={category}/>
        </div>
    )
}
export default Books;
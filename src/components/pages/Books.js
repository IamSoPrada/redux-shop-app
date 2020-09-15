import React from 'react'
import GoodList from "../good-list"
import Categories from "../categories"

 const Books = () => {
    const category = "Программирование"
    return (
        <div>
            <Categories />
            <GoodList category={category}/>
        </div>
    )
}
export default Books;
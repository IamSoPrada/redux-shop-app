import React from 'react'
import GoodList from "../good-list"
import Categories from "../categories"

 const Gifts = () => {
    const category = "Игры, пазлы и игрушки"
    return (
        <div>
            <Categories />
            <GoodList category={category}/>
        </div>
    )
}
export default Gifts;
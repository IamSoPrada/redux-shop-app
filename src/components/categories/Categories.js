import React from 'react'
import {Link} from "react-router-dom"
import "./Categories.css"

const Categories = () => {
    return (
        <div className="container-fluid p-0">
            <Link to="/gifts" className="mr-3">Подарки</Link>
            <Link to="/books">Книги по программированию</Link>
        </div>
    )
}
export default Categories;
import React from 'react'
import {Link} from "react-router-dom"
import SearchPanel from "../search-panel"
import "./Categories.css"

const Categories = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <h4>Категории:</h4>
            <Link to="/gifts">Подарки</Link>
            <Link to="/books">Книги по программированию</Link>
            <SearchPanel className="mt-3"/>
        </div>
    )
}
export default Categories;
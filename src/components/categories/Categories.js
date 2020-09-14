import React from 'react'
import {Link} from "react-router-dom"
import SearchPanel from "../search-panel"
import "./Categories.css"

const Categories = () => {
    return (
        <div className="container-fluid p-0">
            <Link to="/gifts" className="mr-3">Подарки</Link>
            <Link to="/books">Книги по программированию</Link>
            <SearchPanel className="mt-3"/>
        </div>
    )
}
export default Categories;
import React from 'react'
import "./ShopHeader.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {totalReducer} from "../../actions"

const ShopHeader = ({items}) => {

    let currentTotal = items.map(item=> item.total)
    let currentCount = items.map(item => item.count)


    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark" href="#">Frontend Library</div>
            </Link>

            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                     {totalReducer(currentCount)} ед. ({totalReducer(currentTotal)} руб)
            </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({shoppingCart:{ cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

export default connect(mapStateToProps, null)(ShopHeader);
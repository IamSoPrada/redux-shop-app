import React from 'react'
import "./ShopHeader.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const ShopHeader = ({items}) => {

    let currentTotal = items.map(item=> item.total)
    const reducerTotal = (accumulator, currentTotal) => accumulator + currentTotal;
    let reducedTotal = currentTotal.reduce(reducerTotal, 0)

    let currentCount = items.map(item => item.count)
    const reducerCount = (accumulator, currentCount) => accumulator + currentCount;
    let reducedCount = currentCount.reduce(reducerCount, 0)
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark" href="#">Frontend Library</div>
            </Link>

            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                     {reducedCount } ед. ({reducedTotal } руб)
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
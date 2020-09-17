import React from 'react'
import "./ShopHeader.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {totalReducer} from "../../actions"

const ShopHeader = ({items}) => {

    let currentTotal = items.map(item=> item.total)

    let currentCount = items.map(item => item.count)


    return (

        <div className="shop-header">
            <Link to="/">
                <div className="logo text-dark" href="#">Frontend Library</div>
            </Link>

            <div className="row">
                <Link to ="/login">
                    <div className="shopping-cart">
                        <i class="cart-icon fa fa-user" />
                    </div>
                </Link>
                <Link to ="/wishlist">
                    <div className="shopping-cart">
                    <i class="fa fa-star cart-icon" />
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="shopping-cart">
                        <i className="cart-icon fa fa-shopping-cart" />
                        {totalReducer(currentCount)} ед. ({totalReducer(currentTotal)} руб)
                </div>
                </Link>

            </div>
        </div>
    )
}

const mapStateToProps = ({shoppingCart:{ cartItems}}) => {
    return {
        items: cartItems
    }
}

export default connect(mapStateToProps, null)(ShopHeader);
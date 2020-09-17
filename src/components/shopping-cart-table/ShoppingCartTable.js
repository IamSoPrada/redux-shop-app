import React from 'react'
import {goodAddedToCart, goodRemovedFromCart, allGoodsRemovedFromCart, totalReducer} from "../../actions"
import "./ShoppingCartTable.css"
import { connect } from "react-redux"

const ShoppingCartTable = ({ items, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-center">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-center">
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-center">
                        <i className="fa fa-trash-o" />
                    </button>

                </td>
                
            </tr>
        )
    }



    let currentTotal = items.map(item=> item.total)



    return (
        <div className="shopping-cart-table">
            <h2> Ваш заказ</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Итог</th>
                        <th>Добавить / Удалить</th>
                    </tr>
                </thead>
                <tbody className="table-text">
                    {items.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Итог: {totalReducer(currentTotal)} руб.
            </div>
            <button className="btn btn-success">Заказать</button>

        </div>
    )
}


const mapStateToProps = ({shoppingCart:{ cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
        onIncrease: goodAddedToCart,
        onDecrease: goodRemovedFromCart,
        onDelete: allGoodsRemovedFromCart
    
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
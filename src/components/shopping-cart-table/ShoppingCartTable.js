import React from 'react'
import "./ShoppingCartTable.css"
import { connect } from "react-redux"

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, name, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-left">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-left">
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-left">
                        <i className="fa fa-trash-o" />
                    </button>

                </td>
            </tr>
        )
    }

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
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Итог: {total}
            </div>

        </div>
    )
}


const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`increase ${id}`)
        },
        onDecrease: (id) => {
            console.log(`Decrease ${id}`)
        },
        onDelete: (id) => {
            console.log(`Delete ${id}`)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
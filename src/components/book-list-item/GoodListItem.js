import React from 'react'
import "./GoodListItem.css"


const GoodListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage,  } = book;
    return (
        <div className="book-list-item">

            <div className="book-cover">
                <img src={coverImage} alt="cover"/>
            </div>

            <div className="book-details">
                <span href="#" className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">{price} руб.</div>
                <button
                onClick={onAddedToCart} 
                className="btn btn-success mt-3 add-to-cart">Добавить</button>
                <button
                className="btn btn-outline-danger btn-sm mt-1 float-center">
                <i className="fa fa-star" />
                </button>
            </div>

        </div>
    )
}
export default GoodListItem;
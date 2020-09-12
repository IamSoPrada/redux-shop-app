import React from 'react'
import "./BookListItem.css"


const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage,  } = book;
    let newPrice = parseInt(price)
    return (
        <div className="book-list-item">

            <div className="book-cover">
                <img src={coverImage} alt="cover"/>
            </div>

            <div className="book-details">
                <span href="#" className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">{newPrice} руб.</div>
                <button
                onClick={onAddedToCart} 
                className="btn btn-dark add-to-cart">Добавить</button>
            </div>

        </div>
    )
}
export default BookListItem;
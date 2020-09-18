import React from 'react'
import "./GoodListItem.css"
import Button from '@material-ui/core/Button';


const GoodListItem = ({ good, onAddedToCart, onAddedToWishList }) => {
    const { title, author, price, coverImage,  } = good;
    return (
        <div className="good-list-item">

            <div className="good-cover">
                <img src={coverImage} alt="cover"/>
            </div>

            <div className="good-details">
                <span href="#" className="good-title">{title}</span>
                <div className="good-author">{author}</div>
                <div className="good-price">{price} руб.</div>
                <Button
                onClick={onAddedToCart} 
                className="btn btn-success mt-3 add-to-cart">Добавить</Button>
                <Button
                onClick ={onAddedToWishList}
                className="btn btn-outline-danger btn-sm mt-1 float-center">
                <i className="fa fa-star" />
                </Button>
            </div>

        </div>
    )
}
export default GoodListItem;
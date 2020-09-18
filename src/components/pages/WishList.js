import React from 'react'
import {goodRemovedFromWishList, allGoodsRemovedFromWishList, allGoodsFromWishListAddedToCart, totalReducer} from "../../actions"
import { connect } from "react-redux"

import Button from '@material-ui/core/Button';


const WishList = ({items, onRemovedFromWishList, onDeleteAll, onAddAllToCart}) => {

    const WishListItem = ({onRemovedFromWishList, item}) => {

        const { title, author, price, image, count  } = item;


        return (
            <div className="good-list-item">

            <div className="good-cover">
                <img src={image} alt="cover"/>
            </div>

            <div className="good-details">
                <span href="#" className="good-title">{title}</span>
                <div className="good-author">{author}</div>
                <div className="good-price">{price} руб.</div>
                <div className="good-price">Кол-во: {count} </div>
                <Button
                onClick ={onRemovedFromWishList}
                className="btn btn-outline-danger btn-sm mt-1 float-center">
                <i className="fa fa-trash" />
                </Button>
            </div>
            

        </div>
        )
    }

    let currentTotal = items.map(item=> item.total)
    
    return (
        <>
        <h3>Список желаний: </h3>
        <ul className="good-list p-0 mt-4">
        {
            items.map(item => {
                return (
                    <li key={item.id}> <WishListItem item={item}
                                onRemovedFromWishList={() => onRemovedFromWishList(item.id)} 
                                /></li>
                )
            })

            
        }
        </ul>
        <h4 className="total mt-5">
        Итог: {totalReducer(currentTotal)} руб.
       
        </h4>
        <div className="good-details mt-3">
            <Button
            onClick ={()=> onDeleteAll()}
             className="btn btn-danger">Очистить список</Button>
            <Button
            onClick ={()=> onAddAllToCart()} 
            className="btn btn-success ml-4">В корзину</Button>
        </div>

        </>
    )
}



const mapStateToProps = ({WishList: {wishItems}}) => {
    return {
        items: wishItems
    }
}

const mapDispatchToProps =  {
   onRemovedFromWishList: goodRemovedFromWishList,
   onDeleteAll: allGoodsRemovedFromWishList,
    onAddAllToCart : allGoodsFromWishListAddedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)
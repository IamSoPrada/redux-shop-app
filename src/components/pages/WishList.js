import React from 'react'
import {goodRemovedFromWishList} from "../../actions"
import { connect } from "react-redux"


const WishList = ({onRemovedFromWishList, coverImage, title, author, price}) => {
    return (
        <div className="good-list-item">

            <div className="good-cover">
                <img src={coverImage} alt="cover"/>
            </div>

            <div className="good-details">
                <span href="#" className="good-title">{title}</span>
                <div className="good-author">{author}</div>
                <div className="good-price">{price} руб.</div>
                <button
                onClick ={onRemovedFromWishList}
                className="btn btn-outline-danger btn-sm mt-1 float-center">
                <i className="fa fa-trash" />
                </button>
            </div>

        </div>
    )
}



const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps =  {
   onRemovedFromWishList: goodRemovedFromWishList
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)
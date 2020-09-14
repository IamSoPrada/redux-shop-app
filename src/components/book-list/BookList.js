import React, { Component } from 'react'
import BookListItem from "../book-list-item"
import Spinner from "../spinner"
import { connect } from "react-redux"

import { WithBookStoreService } from "../hoc"
import { fetchBooks, bookAddedToCart, fetchGifts } from "../../actions"
import { compose } from "../../utils"
import "./BookList.css"
import ErrorIndicator from '../error-indicator'




const BookList = ({ books, onAddedToCart, category }) => {

    return (
        <ul className="book-list p-0 mt-4">
            {
                books.map(book => {
                    if(book.category === category){
                        return (
                            <li key={book.id}> <BookListItem book={book}
                                onAddedToCart={() => onAddedToCart(book.id)} /></li>
                        )
                    } else {
                        return null
                    }
                    
                })
            }
        </ul>

    )
}
class BookListContainer extends Component {


    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading, error, onAddedToCart, category } = this.props
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList category={category} books={books} onAddedToCart ={onAddedToCart }/>
    }
}


const mapStateToProps = ({bookList:{ books, loading, error }}) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookStoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        fetchGifts: fetchGifts(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}
export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer)


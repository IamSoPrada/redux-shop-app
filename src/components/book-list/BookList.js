import React, { Component } from 'react'
import BookListItem from "../book-list-item"
import Spinner from "../spinner"
import { connect } from "react-redux"

import { WithBookStoreService } from "../hoc"
import { fetchBooks } from "../../actions"
import { compose } from "../../utils"
import "./BookList.css"
import ErrorIndicator from '../error-indicator'
import BookStoreService from '../../services/bookstore-service'



const BookList = ({ books }) => {

    return (
        <ul className="book-list">
            {
                books.map(book => {
                    return (
                        <li key={book.id}> <BookListItem book={book} /></li>
                    )
                })
            }
        </ul>

    )
}
class BookListContainer extends Component {


    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books} />
    }
}


const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookStoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch)
    }
}
export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer)


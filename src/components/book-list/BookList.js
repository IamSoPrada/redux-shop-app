import React, { Component } from 'react'
import BookListItem from "../book-list-item"
import Spinner from "../spinner"
import { connect } from "react-redux"

import { WithBookStoreService } from "../hoc"
import { booksLoaded, booksRequested, booksError } from "../../actions"
import { compose } from "../../utils"
import "./BookList.css"
import ErrorIndicator from '../error-indicator'

class BookList extends Component {

    componentDidMount() {
        // получаем данные в этом компоненте из нашего сервиса
        const {
            bookStoreService,
            booksLoaded,
            booksRequested,
            booksError } = this.props;

        booksRequested();
        bookStoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err))
    }

    render() {
        const { books, loading, error } = this.props
        if (loading) {
            return <Spinner />
        }
        if (error){
            return <ErrorIndicator />
        }
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
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
}
export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList)


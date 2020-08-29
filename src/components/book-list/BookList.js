import React, { Component } from 'react'
import BookListItem from "../book-list-item"

import { connect } from "react-redux"

import { WithBookStoreService } from "../hoc"
import { booksLoaded } from "../../actions"
import { compose } from "../../utils"
import "./BookList.css"

class BookList extends Component {

    componentDidMount() {
        // получаем данные в этом компоненте из нашего сервиса
        const { bookStoreService } = this.props;
        const data = bookStoreService.getBooks()


        // диспатчим их в начальное состояние в наш редакс стор
        this.props.booksLoaded(data)
    }

    render() {
        const { books } = this.props

        return (
            <ul>
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

const mapStateToProps = ({ books }) => {
    return { books }
}

const mapDispatchToProps = {
    booksLoaded
}
export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList)


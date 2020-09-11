const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}
const booksRequested = () =>{
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}
export const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}
export const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
}

export const totalReducer = (current) => {
    let reducer = (accumulator, current) => accumulator + current
    let reducedTotal = current.reduce(reducer, 0);
    return reducedTotal;
}


const fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(booksRequested())
    bookStoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => booksError(err))
}


export {
    fetchBooks
}
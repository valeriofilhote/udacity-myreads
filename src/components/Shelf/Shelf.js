import React from 'react'
import PropTypes from 'prop-types'

import { Book } from '../'

const Shelf = ({ shelf: { title, books }, onMoveTo }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                onMoveTo={onMoveTo} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    shelf: PropTypes.shape({
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }),
    onMoveTo: PropTypes.func
}

export default Shelf

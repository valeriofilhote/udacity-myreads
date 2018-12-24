import React from 'react'
import { Book } from '../'
export default ({ shelf: { title, books }, onMoveTo }) => {
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

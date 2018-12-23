import React from 'react'
import { Book } from '../'

export default ({ shelf: { title, books } }) => {
    //TODO: change index for _id
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book, index) => <li key={index}> <Book book={book} /></li>)}
                </ol>
            </div>
        </div>
    )
}

import React from 'react'
import { GridBooks } from '../'

export default ({ shelf: { title, books } }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <GridBooks books={books} />
            </div>
        </div>
    )
}

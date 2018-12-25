import * as api from '../../api/BooksAPI'
import { shelfTypes } from '../../constants'
import noImage from '../../images/no-image.jpg'

export async function search(query) {
    const [items, myBooks] = await Promise.all([
        api.search(query),
        await api.getAll()
    ])
    if (typeof items === 'undefined' || items.error) {
        return {
            error: 'no book found',
            items: []
        }
    } else {
        return {
            error: null,
            items: _parseBooks(items, myBooks)
        }
    }
}
export async function updateBook(selectedBook, newShelf, books) {
    const index = books.findIndex(b => b.id === selectedBook.id)
    if (index !== -1) {
        await api.update(selectedBook, newShelf)
        books[index].belongsTo = newShelf
        books[index].isMoving = false
        return books
    }
    throw new Error('Book not found ...')
}

// ***********************************
// Helpers
// ***********************************
// src/images/no-image.jpg
function _parseBooks(items, myBooks) {
    const books = []
    items.forEach(item => {
        books.push({
            id: item.id,
            cover: {
                url: item.imageLinks ? item.imageLinks.smallThumbnail : noImage,
                width: 128,
                height: 192
            },
            title: item.title,
            authors: item.authors ? item.authors.join(', ') : 'author not informed',
            belongsTo: _getBelongsTo(item, myBooks),
            isMoving: false
        })
    })
    return books
}
function _getBelongsTo(item, myBooks) {
    const book = myBooks.find(b => b.id === item.id)
    return book
        ? book.shelf
        : shelfTypes.NONE
}

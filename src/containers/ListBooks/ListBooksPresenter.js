import * as api from '../../api/BooksAPI'
import * as util from '../../util/util'
/**
 * @description Parse API result into Front-End´s view object
 */
export async function getAll() {
    const results = await api.getAll()
    const shelves = new Set(results.map(r => r.shelf))

    const booksShelves = []
    shelves.forEach(s => {
        const specShelf = results.filter(r => r.shelf === s)
        booksShelves.push({
            title: util.parseShelfTitle(s),
            books: _getBooks(specShelf)
        })
    })
    return booksShelves
}
/**
 *
 * @param {Object} book
 * @param {string} shelf
 */
export async function changeShelf(book, shelf) {
    const result = await api.update(book, shelf)
    console.log('result =>', result)
}

// ***********************************
// Helpers Methods
// ***********************************
function _getBooks(specShelf) {
    const books = []
    specShelf.forEach(sp => {
        books.push({
            cover: {
                url: sp.imageLinks.smallThumbnail,
                width: 128,
                height: 192
            },
            title: sp.title,
            authors: sp.authors[0],
            belongTo: sp.shelf
        })
    })
    return books
}
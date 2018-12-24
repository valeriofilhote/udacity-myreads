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
            id: s,
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
/**
 * @description Update Shelves after the MoveTo Event was triggered
 * @param {Object} book
 * @param {string} newShelfName
 * @param {Array<shelf>} shelves Actual Shelves
 */
export async function updateShelves(book, newShelfName, shelves) {
    // Removing book from actual shelf
    const actualShelf = book.belongsTo
    let shelf = shelves.find(s => s.id === actualShelf)

    if (shelf) {
        await api.update(book, newShelfName)
        shelf.books = shelf.books.filter(b => b.id !== book.id)
        //FIXME: when newShelfName = 'NONE'
        // Moving to the new shelf
        shelf = shelves.find(s => s.id === newShelfName)
        if (shelf) {
            book.belongsTo = newShelfName
            book.isMoving = false
            shelf.books.push(book)
            return shelves
        }
    }
    throw new Error('Actual Shelf was not found')
}

export function updateBook(book, shelves) {
    const shelf = shelves.find(s => s.id === book.belongsTo)
    if (shelf) {
        const index = shelf.books.findIndex(b => b.id === book.id)
        if (index !== -1) {
            shelf.books[index] = book
        }
    }
    return shelves
}
// ***********************************
// Helpers Methods
// ***********************************
function _getBooks(specShelf) {
    const books = []
    specShelf.forEach(sp => {
        books.push({
            id: sp.id,
            cover: {
                url: sp.imageLinks.smallThumbnail,
                width: 128,
                height: 192
            },
            title: sp.title,
            authors: sp.authors.join(', '),
            belongsTo: sp.shelf,
            isMoving: false
        })
    })
    return books
}
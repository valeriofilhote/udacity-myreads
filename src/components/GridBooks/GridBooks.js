import React from 'react'
import { Book } from '../'
export default ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((book, index) => <li key={index}> <Book book={book} /></li>)}
    </ol>
  )
}

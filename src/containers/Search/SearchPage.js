import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input'

import { Book, Loading, ErrorMessage } from '../../components'
import * as presenter from './SearchPresenter'


export default class SearchPage extends Component {
    state = {
        showMode: 'none',
        books: []
    }
    // ***********************************
    // Events
    // ***********************************
    onCloseClickedHandler = () => {
        this.props.history.goBack()
    }
    onTextChangeHandler = async (text) => {
        const query = text.trim()
        if (query.length > 0) {
            this.setState({ showMode: 'search' })
            const result = await presenter.search(query)
            const { error, items } = result
            if (error) {
                this.setState({ showMode: 'error' })
            } else {
                this.setState({ books: items, showMode: 'books' })
            }
        } else {
            this.setState({ showMode: 'none' })
        }

    }
    onMoveToHandler = async (book, newShelf) => {
        const books = await presenter.updateBook(book, newShelf, [...this.state.books])
        this.setState({ books })
    }
    // ***********************************
    // Hooks
    // ***********************************
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.onCloseClickedHandler}>Close</button>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={3}
                            placeholder="Search by title or author"
                            debounceTimeout={500}
                            onChange={event => this.onTextChangeHandler(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this._getRenderedElement()}
                    </ol>
                </div>
            </div>
        )
    }
    // ***********************************
    // Helper
    // ***********************************
    _getRenderedElement() {
        switch (this.state.showMode) {
            case 'none':
                return null
            case 'search':
                return <Loading>Searching ...</Loading>
            case 'error':
                return <ErrorMessage title="Error:" message="Sorry. Something went wrong! Try other book ..." />
            case 'books':
                return this.state.books.map(book => (
                    <li key={book.id}>
                        <Book
                            book={book}
                            onMoveTo={this.onMoveToHandler} />
                    </li>
                ))

            default:
                break;
        }
    }
}

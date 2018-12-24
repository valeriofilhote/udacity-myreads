import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Shelf, Loading, ErrorMessage } from '../../components'
import * as presenter from './ListBooksPresenter'

export default class ListBooksPage extends Component {
    state = {
        whatToBeShown: 'loading',
        errorMessage: '',
        shelves: []
    }
    async componentDidMount() {
        try {
            const shelves = await presenter.getAll()
            this.setState({
                whatToBeShown: 'shelves',
                shelves
            })
        } catch (error) {
            this.setState({
                whatToBeShown: 'error',
                errorMessage: JSON.stringify(error),
            })
        }
    }
    render() {
        return this._getElementToBeRendered()
    }
    // ***********************************
    // Helpers
    // ***********************************
    _getElementToBeRendered() {
        switch (this.state.whatToBeShown) {
            case 'loading':
                return <Loading>Your Books are coming ...</Loading>
            case 'shelves':
                return (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                {this.state.shelves.map(shelf => <Shelf key={shelf.title} shelf={shelf} />)}
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to='/search'>Add a book</Link>
                        </div>
                    </div>
                )
            case 'error':
                return <ErrorMessage
                    title="Error"
                    message={this.state.errorMessage} />
            default:
                throw new Error(`Element to be shown does not exists: ${this.state.whatToBeShown}`)
        }
    }
}
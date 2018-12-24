import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import { ListBooksPage, SearchPage } from './containers'
class BooksApp extends React.Component {

  //TODO: 1. PropTypes, 2.Main component to hold shelves
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' component={ListBooksPage} />
          <Route path='/search' component={SearchPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp

import React from 'react'
import { Changer, Loading } from '../'
import PropTypes from 'prop-types'
import { shelfTypes } from '../../constants'

class Book extends React.Component {
    // ***********************************
    // Events
    // ***********************************
    onMoveToHandler = (shelfName) => {
        this.props.book.isMoving = true
        this.props.onMoveTo(this.props.book, shelfName)
    }
    // ***********************************
    // Hooks
    // ***********************************
    render() {
        const {
            cover: { url, width, height },
            title, authors, belongsTo, isMoving } = this.props.book
        const renderedElement = isMoving
            ? <Loading>Moving ...</Loading>
            : (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: width,
                            height: height,
                            backgroundImage: `url(${url})`
                        }}></div>
                        <div className="book-shelf-changer">
                            <Changer
                                onMoveTo={this.onMoveToHandler}
                                selectedShelf={belongsTo} />
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            )
        return renderedElement
    }
}

Book.propTypes = {
    onMoveTo: PropTypes.func.isRequired,
    book: PropTypes.shape({
        cover: PropTypes.shape({
            url: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number
        }).isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string).isRequired,
        belongsTo: PropTypes.oneOf([
            shelfTypes.CURRENT_READING,
            shelfTypes.WANT_TO_READ,
            shelfTypes.READ,
            shelfTypes.NONE
        ]).isRequired,
        isMoving: PropTypes.bool.isRequired
    })
}

export default Book
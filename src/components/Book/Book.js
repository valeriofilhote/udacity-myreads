import React from 'react'
import { Changer, Loading } from '../'

export default class extends React.Component {
    onMoveToHandler = (shelfName) => {
        this.props.book.isMoving = true
        this.props.onMoveTo(this.props.book, shelfName)
    }
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
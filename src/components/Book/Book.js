import React from 'react'
import { Changer } from '../'

// book: {url, title, authors}
export default ({ book: { cover: { url, width, height }, title, authors } }) => {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: width,
                    height: height,
                    backgroundImage: `url(${url})`
                }}></div>
                <div className="book-shelf-changer">
                    <Changer />
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

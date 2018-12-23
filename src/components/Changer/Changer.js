import React from 'react'
import { shelfTypes } from '../../constants'

export default ({ selectedShelf, onChange }) => (
    <select onChange={event => onChange(event.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value={shelfTypes.CURRENT_READING}>
            {selectedShelf === shelfTypes.CURRENT_READING ? <span>&#10004;</span> : null}
            Currently Reading
        </option>
        <option value={shelfTypes.WANT_TO_READ}>
            {selectedShelf === shelfTypes.WANT_TO_READ ? <span>&#10004;</span> : null}
            Want to Read
        </option>
        <option value={shelfTypes.READ}>
            {selectedShelf === shelfTypes.READ ? <span>&#10004;</span> : null}
            Read
        </option>
        <option value="none">
            None
        </option>
    </select>
)

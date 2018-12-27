import React from 'react'
import PropTypes from 'prop-types'
import { shelfTypes } from '../../constants'

const Changer = ({ selectedShelf, onMoveTo }) => (
    <select onChange={event => onMoveTo(event.target.value)} value={selectedShelf}>
        <option value="move" disabled>Move to...</option>
        <option value={shelfTypes.CURRENT_READING}>
            {selectedShelf === shelfTypes.CURRENT_READING ? String.fromCharCode(10004, 32) : null}
            Currently Reading
        </option>
        <option value={shelfTypes.WANT_TO_READ}>
            {selectedShelf === shelfTypes.WANT_TO_READ ? String.fromCharCode(10004, 32) : null}
            Want to Read
        </option>
        <option value={shelfTypes.READ}>
            {selectedShelf === shelfTypes.READ ? String.fromCharCode(10004, 32) : null}
            Read
        </option>
        <option value={shelfTypes.NONE}>
            {selectedShelf === shelfTypes.NONE ? String.fromCharCode(10004, 32) : null}
            None
        </option>
    </select>
)
Changer.propTypes = {
    selectedShelf: PropTypes.oneOf([
        shelfTypes.CURRENT_READING,
        shelfTypes.WANT_TO_READ,
        shelfTypes.READ,
        shelfTypes.NONE
    ]).isRequired,
    onMoveTo: PropTypes.func.isRequired
}
export default Changer
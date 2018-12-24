import { shelfTypes } from '../constants'

export function parseShelfTitle(shelfName) {
    switch (shelfName) {
        case shelfTypes.CURRENT_READING:
            return 'Currently Reading'
        case shelfTypes.WANT_TO_READ:
            return 'Want to Read'
        case shelfTypes.READ:
            return 'Read'
        default:
            throw new Error('Shelf Type is not defined')
    }
}
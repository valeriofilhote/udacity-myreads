import React from 'react'
import './ErrorMessage.css'
import PropTypes from 'prop-types'

const ErrorMessage = ({ title, message }) => {
    return (
        <div className="errorMessage">
            <h5 className="title">{title}</h5>
            <p className="message">{message}</p>
        </div>
    )
}
ErrorMessage.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}
export default ErrorMessage

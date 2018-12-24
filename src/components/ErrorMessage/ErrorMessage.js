import React from 'react'
import './ErrorMessage.css'

export default ({ title, message }) => {
    return (
        <div className="errorMessage">
            <h5 className="title">{title}</h5>
            <p className="message">{message}</p>
        </div>
    )
}

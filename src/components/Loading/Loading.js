import React from 'react'
import PropTypes from 'prop-types'
import './Loading.css'

const Loading = ({ children }) => {
    return (
        <div className="loading">
            <h5>{children}</h5>
            <div className="indicator indicator-1"></div>
            <div className="indicator indicator-2"></div>
            <div className="indicator indicator-3"></div>
            <div className="indicator indicator-4"></div>
        </div>
    )
}
Loading.propTypes = {
    children: PropTypes.string.isRequired
}

export default Loading

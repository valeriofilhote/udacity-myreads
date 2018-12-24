import React from 'react'
import './Loading.css'

export default ({ children }) => {
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

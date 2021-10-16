import React from 'react'
import  './CustomLabel.css'

export default function CustomLabel(props) {
    return (
        <div className="radial-wrapper">
            <p className="radial-results">
               {props.data} %
            </p>
            <p className="radial-text">de votre objectif</p>
        </div>
    )
}

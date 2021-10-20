import PropTypes from "prop-types"
import React from 'react'

/**
 *
 * @param {PropTypes} props
 * @returns 
 */
export default function CustomLabel(props) {
    return (
        <div className={props.classWrapper}>
            <p className={props.classValue}>
               {props.data}
            </p>
            <p className={props.classSpanValue}>{props.spanValue} </p>
        </div>
    )
}

CustomLabel.PropTypes = {
    classSpanValue: PropTypes.string,
    classValue: PropTypes.string,
    classWrapper: PropTypes.string,
    data: PropTypes.any,
    spanValue: PropTypes.string
}

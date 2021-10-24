import PropTypes from "prop-types"
import React from 'react'

/**
 * render a <CustomLabel /> 
 * a label customized for charts when the Recharts label don't work
 * @param {PropTypes} props
 * @component
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

CustomLabel.propTypes = {
    classSpanValue: PropTypes.string,
    classValue: PropTypes.string,
    classWrapper: PropTypes.string,
    data: PropTypes.any,
    spanValue: PropTypes.string
}

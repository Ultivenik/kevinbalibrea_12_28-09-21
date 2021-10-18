import React from 'react'

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

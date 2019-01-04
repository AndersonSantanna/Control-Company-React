import React from 'react'

export default props =>(
    <a href={props.link}>
        <div className={`${props.button} btn btn-${props.color}`}>
            <i className={`fa fa-${props.icon} display-4`}> {props.label}</i>
        </div>
    </a>
)
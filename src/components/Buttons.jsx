import React from 'react'
import './style/buttons.css'

export default props => <button  
    className={`
        button
        ${props.operator ? 'operator' : ''}
        ${props.zero ? 'zero' : ''}
        ${props.clearScreen ? 'clearScreen' : ''}
    `}
    onClick={e => props.click(props.label)}
    >
        { props.label }
    </button>
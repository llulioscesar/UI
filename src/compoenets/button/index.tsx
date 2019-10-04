import React from 'react'
import './button.css'

const Button: React.FC<{text?:string}> = ({text}) => {
    return (
        <button className='boton'>
            {text}
        </button>
    )
}

export default Button

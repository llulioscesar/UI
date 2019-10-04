import React from 'react'
import './button.css'

export const Button: React.FC<{text?:string}> = ({text}) => {
    return (
        <button className='boton'>
            {text}
        </button>
    )
};

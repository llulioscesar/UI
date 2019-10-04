import React from 'react'

const Button: React.FC<{text?:string}> = ({text}) => {
    return (
        <button>
            {text}
        </button>
    )
}

export default Button

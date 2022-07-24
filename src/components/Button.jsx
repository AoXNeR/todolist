import React from 'react'

function Button({ className, onClick }) {
    return (
        <>
            <button className={className} onClick={onClick}>+</button>
        </>
    )
}

export default Button
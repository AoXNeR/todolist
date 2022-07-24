import React from 'react'

function Input({ placeholder, className, onChange, value }) {
    return (
        <>
            <input placeholder={placeholder} className={className} onChange={onChange} value={value}/>
        </>
    )
}

export default Input
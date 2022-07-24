import React from 'react'
import { useState } from 'react'
import Input from './Input'
import Button from './Button'

function NewNote({ onClickSetter }) {

    const [input, setInput] = useState('')

    function onInputChange(event) {
        const { value } = event.target
        setInput(value)
    }

    function onButtonClick(event) {
        onClickSetter((prev) => {
            try {
                return [...prev, {input: input, id: prev[prev.length-1].id+1, lined: false}]
            }catch{
                return [{input: input, id: 0, lined: false}]
            }
        })
        setInput('')
    }

    return (
        <>
            <Input placeholder="add new note" className='note-text' onChange={onInputChange} value={input}/>
            <Button className='btn btn-primary add-note' onClick={onButtonClick} />
        </>
    )
}

export default NewNote
import React, { useState } from 'react'

function Note({ note, onClickSetter }) {
    const { input, id } = note
    const [strikeThrough, setStrikeThrough] = useState(false);

    function onNoteClick(event) {
        const { value, id } = event.target
        setStrikeThrough((prev) => !prev)
        note.lined = !note.lined;
    }
    
    return (
        <>
            <h1 style={ strikeThrough ? {textDecoration: 'line-through'} : { textDecoration: 'none' }} id={id} onClick={onNoteClick}>{input}</h1>
        </>
    )
}

export default Note
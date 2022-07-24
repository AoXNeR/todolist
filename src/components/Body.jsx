import React, { useState } from 'react'
import NewNote from './NewNote'
import Note from './Note'
import RemoveButton from './RemoveButton'

function Body() {

    const [Notes, setNotes] = useState([])

    function removeOnClick(event) {
        setNotes((prev) => prev.filter((aNote) => aNote.lined !== true))
    }
    
    return (
        <div className='notes-body'>
            <NewNote onClickSetter={setNotes}/>
            {Notes.map((note) => { return <Note key={note.id} note={note} onClickSetter={setNotes}/>})}
            <RemoveButton onClick={removeOnClick}/>
        </div>
    )
}

export default Body
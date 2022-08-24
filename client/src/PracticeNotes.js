import React from 'react'

function PracticeNotes({song}) {
  const practice_notes = song.practice_notes.map((practice_note) => practice_note.content)
  return (
    <div>{practice_notes}</div>
  )
}

export default PracticeNotes
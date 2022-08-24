import React, { useState } from 'react'

function AddPracticeNoteForm({song}) {
  const [content, setContent] = useState("")

function handleChange(e) {
  setContent(e.target.value)
}

function handleSubmit(e){
  

  fetch('/practice_notes', {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      },
      body: JSON.stringify({
        content: content,
        song_id: song.id,
      }),
  })
//   .then((resp) => resp.json())
//   .then(newSetlist => setSetlists([...setlists, newSetlist]))

};

  return (
    <form onSubmit={handleSubmit}>
      <p>Add a practice note</p>
      <textarea
        placeholder="Type notes here"
        type="text"
        name="content"
        onChange={handleChange}
        value={content}
      />
      <button type="submit">Create</button>
    </form>
  )
}

export default AddPracticeNoteForm;
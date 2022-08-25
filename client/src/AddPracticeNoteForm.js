import React, { useState, useContext } from 'react'
import { Textarea, Button, VStack } from 
"@chakra-ui/react"
import { ThemeContext } from "./context/theme"

function AddPracticeNoteForm({song}) {
  const [content, setContent] = useState("")
  const {tan, darkGreen, lightGreen} = useContext(ThemeContext)


function handleChange(e) {
  setContent(e.target.value)
}

function handleSubmit(e){
  
  e.preventDefault();
  fetch('/practice_notes', {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      },
      body: JSON.stringify({
        content: content,
        song_id: song.id,
      })
      
      
  })

};

  return (
    <form onSubmit={handleSubmit}>
      <p>Add a practice note</p>
      <VStack
      alignItems="center">

      <Textarea
        placeholder="Type notes here"
        type="text"
        name="content"
        onChange={handleChange}
        value={content}
        />
      <Button 
      border="1px" bg={darkGreen} borderColor={tan}
      type="submit">Add Note</Button>
      </VStack>
    </form>
  )
}

export default AddPracticeNoteForm;
import React, { useContext, useState, useNavigate } from 'react'
import { ThemeContext } from "./context/theme"
import { Input, Textarea, VStack, Button, Text } from "@chakra-ui/react"


function AddSongsToDB() {
  const [newLyrics, setNewLyrics] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const { tan, darkGreen, lightGreen } = useContext(ThemeContext)

  function handleLyricChange(e) {
    setNewLyrics(e.target.value)
  }
  function handleTitleChange(e) {
    setNewTitle(e.target.value)
  }
  

  function handleSubmit(){
    fetch('/songs', {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
        lyrics: newLyrics
      }),
  })
  }
  return (
    <form onSubmit={handleSubmit}>
      <VStack
      alignItems="center">
        <Text fontSize="2xl">Add a song</Text>
        <Input 
        placeholder="Title here"
        type="text"
        name="title"
        onChange={handleTitleChange}
        value={newTitle}
        />
        <Textarea 
        placeholder="Song lyrics here"
        type="text"
        name="lyrics"
        onChange={handleLyricChange}
        value={newLyrics}
        />
        <Button 
      border="1px" bg={darkGreen} borderColor={tan}
      type="submit">Add Song</Button>
      </VStack>

    </form>
    
  )
}

export default AddSongsToDB
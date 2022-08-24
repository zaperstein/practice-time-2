import React, { useState, useEffect } from 'react'
import { useContext } from "react"
import { UserContext } from "./context/user"
import { ThemeContext } from "./context/theme"
import { VStack, Input, Button, Text, Select } from '@chakra-ui/react';





function AddSongToSetlistForm({setlist}) {
  const [songs, setSongs] = useState();
  const [setlistSongs, setSetlistSongs] = useState();
  const [selectedSongObject, setSelectedSongObject] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState();
  
  const { user } = useContext(UserContext);
  const { tan, darkGreen, lightGreen } = useContext(ThemeContext);
 
  
  
  useEffect(() => {
    fetch(`/songs`)
    .then((r) => r.json())
    .then(data => setSongs(data))
  },[])

  
  
  
  function handleSelect(e) {
      const selectedSongTitle = e.target.value
      const selectedSongObject = songs?.filter((song) => song.title == selectedSongTitle)
      setSelectedSongObject(selectedSongObject);
  }

 

  function handleSubmit(e) {

  
    fetch('/setlist_songs', {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      },
      body: JSON.stringify({
        setlist_id: setlist.id,
        song_id: selectedSongId,
      }),
    })
  .then((resp) => resp.json())
  .then(newSetlistSong => setSetlistSongs([...setlistSongs, newSetlistSong]))
  }
  
  return (
    <form>
      <VStack>
      <Select onChange={handleSelect}>
        <option>SELECT A SONG TO ADD</option>
        {songs?.map((song) => <option >
          {song.title} 
        </option>)}
      </Select>
      <Button border="1px" bg={darkGreen} type="button" onClick={handleSubmit}>Add Song to {setlist.name}</Button>
    </VStack>
    </form>
  )
}

export default AddSongToSetlistForm
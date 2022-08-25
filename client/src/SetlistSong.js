import React, { useState, useContext, useEffect } from 'react'
import { Button, VStack, Text, HStack } from "@chakra-ui/react"
import { ThemeContext } from "./context/theme"


function SetlistSong({song, setlist}) {
  const [display, setDisplay] = useState("none")
  const [setlistSongs, setSetlistSongs] = useState([])
  const { tan, darkGreen, lightGreen } = useContext(ThemeContext)

  function toggleDisplay(e) {
    e.preventDefault();
    display === "none" ? setDisplay("block") : setDisplay("none")
    }

    function newLineText(text) {
      const newText = text.split('\n').map(str => <p>{str}</p>);
      
      return newText;
    }

    useEffect(() => {
      fetch('/setlist_songs')
      .then((r) => r.json())
      .then(data => setSetlistSongs(data))
    }, [])

    

    
    function handleDelete(){
      const filteredSetlistSong = setlistSongs.filter((setlistSong) => setlistSong.setlist_id == setlist.id && setlistSong.song_id == song.id)

     
      fetch(`/setlist_songs/${filteredSetlistSong[0].id}`, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => {
        if(res.ok){
          setSetlistSongs(setlistSongs)
        }
      })
      
    }


  return (
    <VStack
    m="5px">
    <form >
      <HStack>
      <Text
      textAlign="center"
      fontSize="xl">- {song.title} 
      </Text>
      <Button 
      border="1px" 
      fontSize="sm"
      bg={darkGreen}
      onClick={handleDelete}>Remove</Button>
      </HStack>
      <Text style={{display: display}}>{newLineText(song.lyrics)}</Text>
    </form>
      <Button border="1px" bg={darkGreen} type="button" onClick={toggleDisplay}>Click for lyrics for this song</Button>
    </VStack>
  )
}

export default SetlistSong
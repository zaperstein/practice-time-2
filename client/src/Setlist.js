import React, { useEffect, useState } from 'react'
import { useContext } from "react"
import { ThemeContext } from "./context/theme"
import { Link } from "react-router-dom"
import { VStack, Input, Button, Text } from '@chakra-ui/react';
import AddSongToSetlistForm from './AddSongToSetlistForm';
import SetlistSong from "./SetlistSong"


function Setlist({setlist}) {
  const [songId, setSongId] = useState('')
  

  const { tan, darkGreen, lightGreen } = useContext(ThemeContext)
  function handleDeleteSong(e){
    const songId = e.target.value
      console.log("clicked")
    // fetch(`/assignments/${id}`, {
    //     method:'DELETE'
    //   })
    // history.push(`/setlist_songs/${assignment.course.id}/assignments`);
}


  return (
    <>
    {/* <Center> */}

        <Text fontSize='2xl'>{setlist?.name} : {setlist.songs?.length} {setlist.songs?.length > 1 || setlist.songs?.length < 1 ? "songs" : "song" }
        </Text>
        <AddSongToSetlistForm setlist={setlist}/>
    <ul>
    {setlist.songs?.map((song) => (
      <SetlistSong setlist={setlist} song={song}/>
      ))}
    </ul>
      
      {/* </Center> */}
    </>

  )
}

export default Setlist
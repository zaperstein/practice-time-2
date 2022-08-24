import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { VStack, Input, Button, Text } from '@chakra-ui/react';
import AddSongToSetlistForm from './AddSongToSetlistForm';


function Setlist({setlist}) {
  const [songId, setSongId] = useState('')
  const [display, setDisplay] = useState("none")

  function handleDeleteSong(e){
    const songId = e.target.value
      console.log("clicked")
    // fetch(`/assignments/${id}`, {
    //     method:'DELETE'
    //   })
    // history.push(`/setlist_songs/${assignment.course.id}/assignments`);
}

function toggleDisplay(e) {
  e.preventDefault();
  display === "none" ? setDisplay("block") : setDisplay("none")
  }

  return (
    <>
    {/* <Center> */}

        <Text fontSize='2xl'>{setlist?.name} : {setlist.songs?.length} {setlist.songs?.length > 1 ? "songs" : "song" }
        </Text>
        <AddSongToSetlistForm setlist={setlist}/>
    <ul>
    {setlist.songs?.map((song) => (
      <>
      <form >
        <li key={song.id}>{song.title} </li>
        <button onClick={toggleDisplay}>Click for lyrics for this setlist</button>
        <li style={{display: display}}>{song.lyrics}</li>
      {/* <button type="submit">x</button> */}
      </form>
      </>
      ))}
    </ul>
      
      {/* </Center> */}
    </>

  )
}

export default Setlist
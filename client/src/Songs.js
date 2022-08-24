import React, { useState, useEffect } from 'react'
import PracticeNotes from './PracticeNotes';
import AddPracticeNoteForm from './AddPracticeNoteForm';
import SearchSongs from './SearchSongs'
import { ThemeContext } from "./context/theme"
import { Center, Square, Circle, VStack, HStack, Button, Text, Box } from '@chakra-ui/react'
import { useContext } from "react"

function Songs() {
const [songs, setSongs] = useState();
const [search, setSearch] = useState('');
const { darkGreen, lightGreen, tan } = useContext(ThemeContext)

  useEffect(() => {
    fetch(`/songs`)
    .then((r) => r.json())
    .then(data => setSongs(data))
      },[])

      const displayedSongs = songs?.filter((song) =>
      song.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Center>
      <ul>
        <SearchSongs onSearch={setSearch}/>
         {displayedSongs?.map((song) => 
          <>
          <li>{song.title}</li>
          <PracticeNotes song={song}/>
          <AddPracticeNoteForm song={song}/>
          </>
         )}
     </ul>
    </Center>
  )
}

export default Songs
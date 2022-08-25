import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
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
    <Center
    mt="5%">
        <VStack
        bg={darkGreen}
        color={tan}
        w="33%"
        mb="2"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
        p="5">
          <HStack>
          <Text fontSize="5xl">Songs</Text>
          </HStack>
        <SearchSongs onSearch={setSearch}/>
      <ul>
         {displayedSongs?.map((song) => 
          
          <>
          <Text 
          textAlign="center"
          fontSize='3xl'>{song.title}</Text>
          <PracticeNotes song={song}/>
          <AddPracticeNoteForm song={song}/>
          </>
         )}
     </ul>
     <Button
     border="1px" bg={darkGreen} borderColor={tan} color={tan} type="button">
      <Link to='/'>Homepage</Link>
      </Button>
         </VStack>
    </Center>
  )
}

export default Songs
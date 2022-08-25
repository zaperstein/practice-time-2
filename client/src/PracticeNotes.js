import React from 'react'
import { Center, Square, Circle, VStack, HStack, Button, Text, Box } from '@chakra-ui/react'
import { ThemeContext } from "./context/theme"
import { useContext } from "react"

function PracticeNotes({song}) {
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)



  return (
    <Box
    >

      <Text>
          {song?.practice_notes.map((practice_note) => (
          <Text fontSize="xl">- {practice_note.content}</Text>
           )
          )}
      </Text>
    </Box>
   
  )
//   song.practice_notes?.map((practice_note) => 
//   {
//   return (
//     <ul>
//       <li>{practice_note.content}</li>
//     </ul>
//   )
//   })
}

export default PracticeNotes
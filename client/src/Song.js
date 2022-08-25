import React, { useState, useContext } from 'react'
import { Text, VStack, Button } from "@chakra-ui/react"
import { ThemeContext } from "./context/theme"
function Song({song}) {
  const [display, setDisplay] = useState("none")
  const { tan, darkGreen, lightGreen } = useContext(ThemeContext)



  function newLineText(text) {

    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
  }

  function toggleDisplay(e) {
    e.preventDefault();
    display === "none" ? setDisplay("block") : setDisplay("none")
    }


  return (
    <VStack>
    <Text 
    textAlign="center"
    fontSize='3xl'>{song.title}
    </Text>
    <Text
    textAlign="center"
    fontSize='2xl'
    style={{display: display}}>
      {newLineText(song.lyrics)}
    </Text>
    <Button border="1px" borderColor={tan} bg={darkGreen} type="button" onClick={toggleDisplay}>Click for lyrics for this song</Button>
    </VStack>
  )
}

export default Song
import React, { useState, useEffect } from 'react'
import { useContext } from "react"
import { UserContext } from "./context/user"
import { Link, useParams } from "react-router-dom"
import Setlist from './Setlist'
import { ThemeContext } from "./context/theme"
import NewSetListForm from './NewSetListForm'
import { Center, Square, Circle, VStack, HStack, Button, Text, Box } from '@chakra-ui/react'


function Setlists() {
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  const [setlists, setSetlists] = useState([])

  const { id } = useParams();
//    useEffect(() => {
//     fetch(`/users/${user.id}/setlists`)
//     .then((r) => r.json())
//     .then(setlists => {
//     setSetlists(setlists);
// })
// }, [])

  useEffect(() => {
  fetch(`/setlists`)
  .then((r) => r.json())
  .then(data => setSetlists(data))
    },[])



  return (
    <Center>
      <Text
      bg={darkGreen}
      color={tan}
      borderRadius="md"
      p="10"
      m="15"
      >
      <VStack>
          <Text fontSize='4xl'>{user?.username}'s Gigs</Text>
          {setlists?.map((setlist) => (
            <Setlist key={setlist.id} setlist={setlist}/>
            ))}
        <NewSetListForm setlists={setlists} setSetlists={setSetlists}/>
        <Button
        bg={lightGreen}>
        <Link to={`/users/${id}/instruments`}>My Instruments</Link>
        </Button>
      </VStack>
      </Text>
    </Center>
  )
}

export default Setlists
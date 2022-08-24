import React, { useEffect, useState } from 'react'
import AddInstrumentForm from "./AddInstrumentForm"
import { useContext } from "react";
import { UserContext } from "./context/user";
import UserInstrument from "./UserInstrument"
import { ThemeContext } from "./context/theme"
import { Center, Square, Circle, VStack, HStack, Button, Text, Box } from '@chakra-ui/react'


function UserInstruments() {
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  const [instruments, setInstruments] = useState()
  
  useEffect(() => {
    fetch(`/users/${user?.id}/instruments`)
    .then((r) => r.json())
    .then(instruments => {
    setInstruments(instruments);
})
}, [])

function updateInstruments() {
    fetch(`/users/${user?.id}/instruments`)
    .then((r) => r.json())
    .then(instruments => {
      setInstruments(instruments);
    })
}
  
  
  return (
    <>
    <Center
    mt="25%">

      <VStack
      bg={darkGreen}
      w="33%"
      mb="2"
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
      p="5">

    <Text
    fontSize='3xl'
    color={tan}>{user?.username}'s Instruments</Text>
    {instruments?.map((instrument) => (
      <UserInstrument  instrument={instrument}/>
      ))}
      <AddInstrumentForm user={user}/>
      </VStack>
      </Center>
    </>
  )
}

export default UserInstruments
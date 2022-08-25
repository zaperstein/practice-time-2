import React, { useEffect, useState  } from 'react'
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import AddInstrumentForm from "./AddInstrumentForm"
import { useContext } from "react";
import { UserContext } from "./context/user";
import UserInstrument from "./UserInstrument"
import { ThemeContext } from "./context/theme"
import { Center, Square, Circle, VStack, HStack, Button, Text, Box } from '@chakra-ui/react'


function UserInstruments() {
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  const [userInstruments, setUserInstruments] = useState([])
  
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    fetch(`/users/${id}/instruments`)
    .then((r) => r.json())
    .then(userInstruments => {
    setUserInstruments(userInstruments);
})
}, [])
  
  return (
    <>
    <Center
    mt="5%">

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
    {userInstruments?.map((instrument) => (
      <UserInstrument  instrument={instrument}/>
      ))}
      <AddInstrumentForm userInstruments={userInstruments} setUserInstruments={setUserInstruments} user={user}/>
      <Button border="1px" bg={darkGreen} borderColor={tan} color={tan}>
      <Link to='/'>Homepage</Link>
      </Button>
      </VStack>
      </Center>
    </>
  )
}

export default UserInstruments
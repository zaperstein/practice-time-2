import React from 'react'
import { Text } from '@chakra-ui/react'
import { ThemeContext } from "./context/theme"
import { useContext } from "react"

function UserInstrument({instrument}) {
  const { tan } = useContext(ThemeContext)

  return (
    <>
    <Text
    fontSize="xl"
    color={tan}>{instrument.name}</Text>
    </>
  )
}

export default UserInstrument
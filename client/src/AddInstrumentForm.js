import React, { useState, useEffect } from 'react'
import { VStack, Select, Button } from "@chakra-ui/react"
import { useContext } from "react"
import {ThemeContext} from "./context/theme"
import {UserContext} from "./context/user"

function AddInstrumentForm() {
  const [instruments, setInstruments] = useState();
  const [instrumentUsers, setInstrumentUsers] = useState();
  const [selectedInstrumentObject, setSelectedInstrumentObject] = useState([]);
  const [selectedInstrumentId, setSelectedInstrumentId] = useState();

  const {darkGreen, tan, lightGreen} = useContext(ThemeContext)
  const { user } = useContext(UserContext)


  useEffect(() => {
    fetch(`/instruments`)
    .then((r) => r.json())
    .then(data => setInstruments(data))
  },[])

  function handleSelect(e) {
    const selectedInstrumentName = e.target.value
    const selectedInstrumentObject = instruments?.filter((instrument) => instrument.name == selectedInstrumentName)
    setSelectedInstrumentObject(selectedInstrumentObject);
}

function handleSubmit(e) {

  
  fetch('/instrument_users', {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    },
    body: JSON.stringify({
      user_id: user.id,
      instrument_id: selectedInstrumentId,
    }),
  })
.then((resp) => resp.json())
.then(newInstrumentUser => setInstrumentUsers([...instrumentUsers, newInstrumentUser]))
}


  return (
    <form>
      <VStack>
      <Select color={tan} onChange={handleSelect}>
        <option>SELECT AN INSTRUMENT TO ADD</option>
        {instruments?.map((instrument) => <option >
          {instrument.name} 
        </option>)}
      </Select>
      <Button border="1px" bg={darkGreen} color={tan} type="button" onClick={handleSubmit}>Add an Instrument!</Button>
    </VStack>
    </form>
  )
}

export default AddInstrumentForm
import React, { useState, useEffect } from 'react'
import { VStack, Select, Button } from "@chakra-ui/react"
import { useContext } from "react"
import {ThemeContext} from "./context/theme"
import {UserContext} from "./context/user"

function AddInstrumentForm({userInstruments, setUserInstruments}) {
  const [instruments, setInstruments] = useState();
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
    // setSelectedInstrumentId(selectedInstrumentObject[0].id)
}

useEffect(() => {
  (selectedInstrumentObject[0] == undefined ? console.log("you havent selected an instrument yet")  : setSelectedInstrumentId(selectedInstrumentObject[0].id))
})



function handleSubmit(e) {

  
  fetch('/instrument_users', {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user.id,
      instrument_id: selectedInstrumentId,
    }),
  })
.then((resp) => resp.json())
.then(newInstrumentUser => setUserInstruments([...userInstruments, newInstrumentUser]))
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
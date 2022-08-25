import React, { useContext, useState } from 'react'
import { UserContext } from "./context/user"
import { VStack, Input, Button, Text, Center } from '@chakra-ui/react';
import { ThemeContext } from "./context/theme"



function NewSetListForm({setlists, setSetlists}) {
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)
  const { user } = useContext(UserContext);
  const [name, setName] = useState("")
  

  function handleSubmit(e){

    e.preventDefault();
    

    fetch('/setlists', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          amt_of_songs: "",
          user_id: user?.id
        }),
    })
    .then((resp) => resp.json())
    .then(newSetlist => setSetlists([...setlists, newSetlist]))

};

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <Center
    alignContent="center">
    
    <form onSubmit={handleSubmit}>
      <Text fontSize='3xl' >Create a new gig</Text>
      <Input
        borderColor={tan}
        placeholder="Name"
        type="text"
        name="name"
        onChange={handleChange}
        value={name}
        />
      <Button 
      type="submit"
      border="1px" borderColor={tan} bg={darkGreen} >Create</Button>
    </form>
    </Center>
  );
}

export default NewSetListForm
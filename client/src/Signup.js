import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, Input, Button, Text } from '@chakra-ui/react';
import { ThemeContext } from "./context/theme"
import { useContext } from "react"
function Signup() {
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    bio: ''
})

const navigate = useNavigate();

const {username, password, bio} = formData


function handleChange(e) {
  const { name, value } = e.target
  setFormData({...formData, [name]: value })
}

function handleSubmit(e) {
  e.preventDefault()
  const user = {
      username,
      password,
      bio
  }

  fetch('/users',{
    method: "POST",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(user)
})
.then(res => {
    if(res.ok){
        res.json().then(user => {
            navigate(`/`)
        })
    } 
})
setFormData({
    username: '',
    password: '',
    bio: ''
})
}
  return (
    <form onSubmit={handleSubmit}>
      <VStack>

      <Input
        color="tan"
        placeholder="Choose Your Username"
        _placeholder= {{color: "tan"}}
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        />
      <Input 
        color="tan"
        placeholder="Choose Your Password"
        _placeholder= {{color: "tan"}}
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        />
        <Input
        color="tan"
        placeholder="Write a bio"
        _placeholder= {{color: "tan"}}
        type="text"
        name="bio"
        value={bio}
        onChange={handleChange}
        />
      
      <Button type="submit">Sign Up</Button>
        </VStack>
    </form>
  )
}

export default Signup
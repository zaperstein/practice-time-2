import React, { useState, } from 'react'
import {useNavigate} from 'react-router-dom'
import { VStack } from '@chakra-ui/react';
function Signup() {
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

      <input
        placeholder="Choose Your Username"
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        />
      <input 
        placeholder="Choose Your Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        />
        <textarea
        placeholder="Write a bio"
        type="text"
        name="bio"
        value={bio}
        onChange={handleChange}
        />
      
      <button type="submit">Sign Up</button>
        </VStack>
    </form>
  )
}

export default Signup
import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { UserContext } from "./context/user";
import UserInstrument from "./UserInstrument"

function UserInstruments() {
  const { user } = useContext(UserContext)
  const [instruments, setInstruments] = useState()
  
  useEffect(() => {
    fetch(`/users/${user.id}/instruments`)
    .then((r) => r.json())
    .then(instruments => {
    setInstruments(instruments);
})
}, [])
  
  
  return (
    <>
    <h1>{user.username}'s Instruments</h1>
    {instruments?.map((instrument) => (
      <UserInstrument key={instrument.id} instrument={instrument}/>
      ))}
    </>
  )
}

export default UserInstruments
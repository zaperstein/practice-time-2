import React from 'react'
import { useContext } from "react";
import { UserContext } from "./context/user";



function Instrument({instrument}) {
  const { user, setUser } = useContext
  (UserContext)
  console.log(user)
  return (
   <div>{instrument.name}</div> 
  )
}

export default Instrument
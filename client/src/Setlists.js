import React, { useState, useEffect } from 'react'
import { useContext } from "react"
import { UserContext } from "./context/user"
import { Link, useParams } from "react-router-dom"
import Setlist from './Setlist'
import NewSetListForm from './NewSetListForm'


function Setlists() {
  const { user } = useContext(UserContext)
  const [setlists, setSetlists] = useState([])

  const {id} = useParams();

//    useEffect(() => {
//     fetch(`/users/${user.id}/setlists`)
//     .then((r) => r.json())
//     .then(setlists => {
//     setSetlists(setlists);
// })
// }, [])

    useEffect(() => {
  fetch(`/setlists`)
  .then((r) => r.json())
  .then(data => setSetlists(data))
    },[])



// console.log(setlists.map((setlist) => {setlist.name}))

// setlists?.map((setlist) => (
//    <Setlist key={setlist.id} setlist={setlist}/>
// ))

  return (
    <>
    <h1>{user.username}'s Gigs</h1>
    {setlists?.map((setlist) => (
   <Setlist key={setlist.id} setlist={setlist}/>
))}
  <NewSetListForm setlists={setlists} setSetlists={setSetlists}/>
  <Link to="/myinstruments">My Instruments</Link>
    </>
  )
}

export default Setlists
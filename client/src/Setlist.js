import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import AddSongToSetlistForm from './AddSongToSetlistForm';


function Setlist({setlist}) {

  
  return (
    <>
    <div>{setlist.name} : {setlist.songs.length} {setlist.songs.length > 1 ? "songs" : "song" }
    <AddSongToSetlistForm setlist={setlist}/>
    </div>
    <ul>
    {setlist.songs.map((song) => (
      <>
      <li key={song.id}>{song.title} </li>
      <li>{song.lyrics}</li>
      <form>
      <button type="submit">x</button>
      </form>
      </>
      ))}
    </ul>
      
    </>

  )
}

export default Setlist
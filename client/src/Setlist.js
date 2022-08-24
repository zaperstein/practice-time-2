import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import AddSongToSetlistForm from './AddSongToSetlistForm';


function Setlist({setlist}) {
  const [songId, setSongId] = useState('')

  function handleDeleteSong(e){
    const songId = e.target.value
      console.log("clicked")
    // fetch(`/assignments/${id}`, {
    //     method:'DELETE'
    //   })
    // history.push(`/setlist_songs/${assignment.course.id}/assignments`);
}


  return (
    <>
    <div>{setlist?.name} : {setlist.songs?.length} {setlist.songs?.length > 1 ? "songs" : "song" }
    <AddSongToSetlistForm setlist={setlist}/>
    </div>
    <ul>
    {setlist.songs?.map((song) => (
      <>
      <form >
        <li key={song.id}>{song.title} </li>
        <li>{song.lyrics}</li>
      <button type="submit">x</button>
      </form>
      </>
      ))}
    </ul>
      
    </>

  )
}

export default Setlist
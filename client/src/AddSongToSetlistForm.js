import React, { useState, useEffect } from 'react'
import { useContext } from "react"
import { UserContext } from "./context/user"



function AddSongToSetlistForm({setlist}) {
  const [songs, setSongs] = useState();
  const [setlistSongs, setSetlistSongs] = useState();
  const [selectedSongObject, setSelectedSongObject] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState();
  const { user } = useContext(UserContext);
 
  
  
  useEffect(() => {
    fetch(`/songs`)
    .then((r) => r.json())
    .then(data => setSongs(data))
  },[])

  
  
  
  function handleSelect(e) {
      const selectedSongTitle = e.target.value
      const selectedSongObject = songs?.filter((song) => song.title == selectedSongTitle)
      setSelectedSongObject(selectedSongObject);
  }

  useEffect(() => {
    (selectedSongObject[0] == undefined ? console.log("you havent selected anything yet")  : setSelectedSongId(selectedSongObject[0].id))
  })

  function handleSubmit(e) {

  
    fetch('/setlist_songs', {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      },
      body: JSON.stringify({
        setlist_id: setlist.id,
        song_id: selectedSongId,
      }),
    })
  .then((resp) => resp.json())
  .then(newSetlistSong => setSetlistSongs([...setlistSongs, newSetlistSong]))
  }
  
  return (
    <form>
      <select onChange={handleSelect}>
        <option>SELECT A SONG TO ADD</option>
        {songs?.map((song) => <option >
          {song.title} 
        </option>)}
      </select>
      <button type="button" onClick={handleSubmit}>Add Song to {setlist.name}</button>
    </form>
  )
}

export default AddSongToSetlistForm
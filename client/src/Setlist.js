import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


function Setlist({setlist}) {
  const [songs, setSongs] = useState();

  
  const joinTable = setlist.setlist_songs
  
  const arrayOfSongs = joinTable.map((tableEntry) => tableEntry.song_id)
  
  const song = arrayOfSongs.map((song) => (song))

  useEffect(() => {
    fetch(`/songs/${song}`)
    .then((r) => r.json())
    .then(data => setSongs(data))
  },[])

  // console.log(setlist.name, ":", songs.title)
  // console.log(setlist.name, ": ", songs.title)

  {songs?.length > 0 ? songs?.map((song) => console.log(setlist.name, ": ", song.title)) : console.log("No songs yet -- add some!")}
  // const titles = songs?.map((song) => console.log(song.title))
  // console.log(titles)

  return (
    <>
    <div>{setlist.name} : {arrayOfSongs.length} songs</div>
    
    </>

  )
}

export default Setlist
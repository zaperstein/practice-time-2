import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


function Setlist({setlist}) {
  const [setlistSongs, setSetlistSongs] = useState();

  
//   fetch("/setlist_songs", {
//     method: "DELETE",
//   }).then((r) => {
//     if (r.ok) {
//         setSetlistSongs();
//     }
//   });;
// }
  return (
    <>
    <div>{setlist.name} : {setlist.songs.length} {setlist.songs.length > 1 ? "songs" : "song" }</div>
    <ul>
    {setlist.songs.map((song) => (
      <li key={song.id}>{song.title} </li>
      ))}
      <button type="submit">x</button>
    </ul>
      
    </>

  )
}

export default Setlist